import NodeCache from 'node-cache';

const cache = new NodeCache({ stdTTL: 3600, checkperiod: 120 });

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
        ...(province && { filter: { "sectionData.Company.province": province } }),
      }),
      cache: 'force-cache',
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const dataRes = await response.json();
    const data = dataRes.data;
    console.log('API response data:', JSON.stringify(data, null, 2));

    const hotels: Hotel[] = (Array.isArray(data) ? data : [data]).map((item: any) => {
      const primaryImage =
        item.sectionData?.Company?.primary_image &&
        typeof item.sectionData.Company.primary_image === "string" &&
        item.sectionData.Company.primary_image.match(/^https?:\/\/[^\s/$.?#].[^\s]*$/)
          ? item.sectionData.Company.primary_image.trim()
          : '';
      const galleryImages =
        item.sectionData?.Company?.gallery_image && typeof item.sectionData.Company.gallery_image === "string"
          ? item.sectionData.Company.gallery_image
              .split(",")
              .map((s: string) => s.trim())
              .filter((s: string) => s.match(/^https?:\/\/[^\s/$.?#].[^\s]*$/))
          : [];
      const image = primaryImage || (galleryImages.length > 0 ? galleryImages[0] : '/images/fallback-image.jpg');

      return {
        id: item._id || 'unknown',
        name: item.sectionData?.Company?.name || 'Unknown Hotel',
        location: [
          item.sectionData?.Company?.city,
          item.sectionData?.Company?.province,
          item.sectionData?.Company?.country,
        ]
          .filter(Boolean)
          .join(", ")
          .replace(/, , /g, ', ')
          .trim() || 'Unknown Location',
        price: Number(item.sectionData?.Company?.price) || 0,
        discountPrice: Number(item.sectionData?.Company?.discountPrice) || 0,
        image,
        province: item.sectionData?.Company?.province || '',
        rating: Number(item.sectionData?.Company?.rating) || 0,
        reviews: Number(item.sectionData?.Company?.reviews) || 0,
        sectionData: {
          Company: {
            name: item.sectionData?.Company?.name,
            city: item.sectionData?.Company?.city,
            province: item.sectionData?.Company?.province,
            country: item.sectionData?.Company?.country,
            description: item.sectionData?.Company?.description,
            gallery_image: item.sectionData?.Company?.gallery_image,
            amenities: item.sectionData?.Company?.amenities,
            promo_active: Number(item.sectionData?.Company?.promo_active) || 0,
            price: Number(item.sectionData?.Company?.price) || 0,
            discountPrice: Number(item.sectionData?.Company?.discountPrice) || 0,
            primary_image: item.sectionData?.Company?.primary_image,
          },
        },
      };
    });

    console.log('Mapped hotels:', JSON.stringify(hotels, null, 2));
    const filteredHotels = province ? hotels.filter(hotel => hotel.province === province) : hotels;
    cache.set(cacheKey, filteredHotels);
    return filteredHotels;
  } catch (error) {
    console.error('Error fetching featured hotels:', error);
    throw error;
  }
}