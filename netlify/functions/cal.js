exports.handler = async function(event, context) {
  const ICAL_URL = "https://calendar.google.com/calendar/ical/0ea1ef108701b4351ace5361c9d3994f26c6fefed8b5db307ad3f62a55edb5e5%40group.calendar.google.com/public/basic.ics";
  
  try {
    const response = await fetch(ICAL_URL);
    if (!response.ok) throw new Error("Fetch failed: " + response.status);
    const text = await response.text();
    return {
      statusCode: 200,
      headers: {
        "Content-Type": "text/calendar",
        "Access-Control-Allow-Origin": "*"
      },
      body: text
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message })
    };
  }
};
