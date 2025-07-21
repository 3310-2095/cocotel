import NodeCache from 'node-cache';

// Initialize cache with a TTL of 1 hour (3600 seconds)
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
}

export async function getFeaturedHotels(province?: string): Promise<Hotel[]> {
  const cacheKey = province ? `hotels_${province}` : 'hotels_all';
  // Check if data exists in cache
  const cachedData = cache.get<Hotel[]>(cacheKey);
  if (cachedData) {
    return cachedData;
  }

  try {
    const response = await fetch('https://crmapi.conscor.com/api/general/mfind', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': 'LHCHoE0IlCOuESA4VQuJ'
      },
      body: JSON.stringify({
        dbName: 'hanahotelnew',
        collectionName: 'company',
      }),
     
      cache: 'force-cache',
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const dataRes = await response.json();
    const data = dataRes.data;

    const hotels: Hotel[] = (Array.isArray(data) ? data : [data]).map((item: any) => ({
      id: item._id,
      name: item.sectionData.Company?.name || 'Unknown Hotel',
      location: `${item.sectionData?.Company?.city || ''}, ${item.sectionData?.Company?.province || ''}, ${item.sectionData?.Company?.country || ''}`.replace(/, , /g, ', ').trim(),
      price: 100,
      discountPrice: 42,
      image: item.sectionData?.Company?.primary_image || 'https://via.placeholder.com/400x200',
      province: item.sectionData?.Company?.province || '',
      rating: 4.6,
      reviews: 12,
    }));

    // Filter by province if provided
    const filteredHotels = province ? hotels.filter(hotel => hotel.province === province) : hotels;

    // Store the result in cache
    cache.set(cacheKey, filteredHotels);
    
    return filteredHotels;
  } catch (error) {
    console.error('Error fetching featured hotels:', error);
    throw error;
  }
}