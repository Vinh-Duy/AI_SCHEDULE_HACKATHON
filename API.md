# API Documentation

## Base URL
```
http://localhost:3000/api
```

## Endpoints

### Generate Schedule
**Endpoint:** `POST /api/generate-schedule`

**Description:** Generate an optimized course schedule based on user input

#### Request
```json
{
  "courses": "- Course Name: (Time Option 1 or Time Option 2)\n- Course 2: (Time 3 or Time 4)",
  "constraints": "Your preferences and constraints here"
}
```

#### Response (Success)
```json
{
  "result": "📅 OPTIMIZED COURSE SCHEDULE\n\nMonday:\n- 9:00 AM - 10:30 AM: Course 1\n..."
}
```

#### Response (Error)
```json
{
  "error": "Missing courses or constraints information"
}
```

#### Status Codes
- `200`: Success
- `400`: Bad Request (missing fields)
- `500`: Server Error

## Examples

### cURL Example
```bash
curl -X POST http://localhost:3000/api/generate-schedule \
  -H "Content-Type: application/json" \
  -d '{
    "courses": "- Data Structures: (Monday 9AM or Wednesday 2PM)",
    "constraints": "No morning classes"
  }'
```

### JavaScript Fetch Example
```javascript
fetch('/api/generate-schedule', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    courses: '- Data Structures: (Monday 9AM or Wednesday 2PM)',
    constraints: 'No morning classes'
  })
})
.then(res => res.json())
.then(data => console.log(data.result))
.catch(err => console.error(err));
```

### Python Requests Example
```python
import requests

url = 'http://localhost:3000/api/generate-schedule'
data = {
    'courses': '- Data Structures: (Monday 9AM or Wednesday 2PM)',
    'constraints': 'No morning classes'
}

response = requests.post(url, json=data)
print(response.json()['result'])
```

## Input Specifications

### Courses Field
- Format: Bullet list with course name and time options
- Required: Yes
- Example:
  ```
  - Course Name: (Option 1 or Option 2)
  - Another Course: (Option 3 or Option 4)
  ```

### Constraints Field
- Format: Free text with preferences
- Required: Yes
- Example:
  ```
  I don't want early morning classes.
  I prefer afternoon sessions.
  I need lunch from 12-1 PM.
  ```

## Response Format

Responses are returned as markdown-formatted text including:
- Daily schedule breakdown
- Time slots with course names
- Break periods
- AI reasoning and constraints satisfaction
- Workload analysis
- Study recommendations

## Error Handling

### Common Errors

**400 Bad Request**
- Missing "courses" field
- Missing "constraints" field
- Empty request body

**500 Internal Server Error**
- API key not configured
- Gemini API unavailable
- Network connectivity issues

## Rate Limiting

- No official rate limit
- Fair use recommended
- Consider API quotas from Google

## Timeout

- Request timeout: 30 seconds
- Response expected within 1-3 seconds typically

## CORS

- CORS enabled on all origins
- Preflight requests supported
- Methods: POST, OPTIONS

## Authentication

- No authentication required
- Google API key stored server-side
- Users don't need credentials
