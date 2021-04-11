export default async function(url, 
  method = 'GET',
  data,
) {
  try {
    const response = await fetch(url, {
      method,
      data
    });
  
    return await response.json();
  } catch (error) {
    throw error;
  }
}
