import NodeCache from 'node-cache';

// Initialize cache
const cache = new NodeCache({ stdTTL: 3600, checkperiod: 120 });

// Define API response interface
interface ApiHotel {
  _id?: string;
  sectionData?: {
    Company?: {
      name?: string;
      city?: string;
      province?: string;
      country?: string;
      description?: string;
      gallery_image?: string;
      amenities?: string;
      promo_active?: number | string;
      price?: number | string;
      discountPrice?: number | string;
      primary_image?: string;
      rating?: number | string;
      reviews?: number | string;
    };
  };
}

export interface Hotel {
  id: string;
  name: string;
  location: string;
  price: number;
  discountPrice: number;
  image: string;
  province: string;
  rating: number;
  reviews: number;
  sectionData?: {
    Company?: {
      name?: string;
      city?: string;
      province?: string;
      country?: string;
      description?: string;
      gallery_image?: string;
      amenities?: string;
      promo_active?: number;
      price?: number;
      discountPrice?: number;
      primary_image?: string;
    };
  };
}

export async function getFeaturedHotels(province?: string): Promise<Hotel[]> {
  const cacheKey = province ? `hotels_${province}` : 'hotels_all';
  const cachedData = cache.get<Hotel[]>(cacheKey);
  if (cachedData) {
    console.log(`Returning cached hotels for key: ${cacheKey}`);
    return cachedData;
  }

  try {
    const response = await fetch('https://crmapi.conscor.com/api/general/mfind', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': 'w5K4iw1tRCTbnOrkprhs',
      },
      body: JSON.stringify({
        dbName: 'hanahotelnew',
        collectionName: 'company',
        ...(province && { filter: { 'sectionData.Company.province': province } }),
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const dataRes = await response.json();
    const data: ApiHotel[] | ApiHotel = dataRes?.data;

    if (!data) {
      console.warn('No data returned from API');
      return [];
    }

    const hotels: Hotel[] = (Array.isArray(data) ? data : [data]).map((item: ApiHotel) => {
      const company = item.sectionData?.Company || {};
      const primaryImage =
        typeof company.primary_image === 'string' &&
        company.primary_image.match(/^https?:\/\/[^\s/$.?#].[^\s]*$/)
          ? company.primary_image.trim()
          : '';
      const galleryImages =
        typeof company.gallery_image === 'string'
          ? company.gallery_image
              .split(',')
              .map((s: string) => s.trim())
              .filter((s: string) => s.match(/^https?:\/\/[^\s/$.?#].[^\s]*$/))
          : [];
      const image = primaryImage || (galleryImages.length > 0 ? galleryImages[0] : 'https://example.com/fallback-image.jpg');

      return {
        id: item._id || 'unknown',
        name: company.name || 'Unknown Hotel',
        location: [company.city, company.province, company.country]
          .filter(Boolean)
          .join(', ')
          .replace(/, , /g, ', ')
          .trim() || 'Unknown Location',
        price: Number(company.price) || 0,
        discountPrice: Number(company.discountPrice) || 0,
        image,
        province: company.province || '',
        rating: Number(company.rating) || 0,
        reviews: Number(company.reviews) || 0,
        sectionData: {
          Company: {
            name: company.name,
            city: company.city,
            province: company.province,
            country: company.country,
            description: company.description,
            gallery_image: company.gallery_image,
            amenities: company.amenities,
            promo_active: Number(company.promo_active) || 0,
            price: Number(company.price) || 0,
            discountPrice: Number(company.discountPrice) || 0,
            primary_image: company.primary_image,
          },
        },
      };
    });

    console.log('Mapped hotels:', JSON.stringify(hotels, null, 2));
    cache.set(cacheKey, hotels);
    return hotels;
  } catch (error) {
    console.error('Error fetching featured hotels:', error);
    return [];
  }
}