const apiKey = import.meta.env.WAKATIME_API_KEY;

export const getWakaTimeStats = async () => {
  if (!apiKey) {
    return null; // Graceful offline/placeholder if not configured
  }

  // WakaTime requires API Key encoded in Base64 for Basic Auth
  const basicAuth = Buffer.from(apiKey).toString('base64');

  try {
    const response = await fetch(
      'https://wakatime.com/api/v1/users/current/stats/last_7_days',
      {
        headers: {
          Authorization: `Basic ${basicAuth}`,
        },
      }
    );

    if (response.ok) {
      return await response.json();
    }
    return null;
  } catch (error) {
    console.error('WakaTime API Error:', error);
    return null;
  }
};
