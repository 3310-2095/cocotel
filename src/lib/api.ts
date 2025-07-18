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
      })
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const dataRes = await response.json(); // Remove .data assumption
    const data = dataRes.data;
    
   
    const hotels: Hotel[] = (Array.isArray(data) ? data : [data]).map((item: any) => ({
    id: item._id,
    name: item.sectionData.Company?.name || 'Unknown Hotel',
    location: `${item.sectionData?.Company?.city || ''}, ${item.sectionData?.Company?.province || ''}, ${item.sectionData?.Company?.country || ''}`.replace(/, , /g, ', ').trim(),
    price: 100, // You can enhance this if needed
    discountPrice: 42,
    image: item.sectionData?.Company?.primary_image || 'https://via.placeholder.com/400x200',
    province: item.sectionData?.Company?.province || '',
    rating: 4.6,
    reviews: 12,
  }));

    // Filter by province if provided
    return province ? hotels.filter(hotel => hotel.province === province) : hotels;
  } catch (error) {
    console.error('Error fetching featured hotels:', error);
    throw error;
  }
}