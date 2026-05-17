# Project Architecture

## System Architecture Overview

```
┌─────────────────────────────────────────────────────────┐
│                    USER INTERFACE (Frontend)            │
│  HTML + Tailwind CSS + Vanilla JavaScript               │
│  - Course Input Form                                    │
│  - Preferences Input Form                              │
│  - Results Display                                      │
│  - Loading & Error States                              │
└────────────────────┬────────────────────────────────────┘
                     │ HTTP POST
                     │ /api/generate-schedule
                     ▼
┌─────────────────────────────────────────────────────────┐
│                   EXPRESS.JS SERVER                      │
│  - Request Handler                                      │
│  - Input Validation                                     │
│  - Prompt Engineering                                   │
│  - Response Formatting                                  │
└────────────────────┬────────────────────────────────────┘
                     │
                     │ API Call
                     ▼
┌─────────────────────────────────────────────────────────┐
│             GOOGLE GEMINI API (Cloud)                    │
│  - Model: Gemini 2.5 Flash                              │
│  - AI Processing                                        │
│  - Schedule Generation                                  │
│  - Natural Language Understanding                       │
└────────────────────┬────────────────────────────────────┘
                     │ JSON Response
                     ▼
┌─────────────────────────────────────────────────────────┐
│              RESPONSE FORMATTING                         │
│  - Markdown Conversion                                  │
│  - Error Handling                                       │
│  - Response Validation                                  │
└────────────────────┬────────────────────────────────────┘
                     │
                     │ HTTP Response
                     ▼
┌─────────────────────────────────────────────────────────┐
│            BROWSER - DISPLAY RESULTS                     │
│  - Parse JSON Response                                  │
│  - Render Markdown                                      │
│  - Update UI                                            │
└─────────────────────────────────────────────────────────┘
```

## Technology Stack Details

### Frontend Layer
- **HTML5**: Semantic structure
- **Tailwind CSS**: Utility-first styling
- **Vanilla JS**: No framework dependencies
- **Fetch API**: HTTP communication

### Backend Layer
- **Node.js**: JavaScript runtime
- **Express.js**: Web framework
- **CORS**: Cross-origin support
- **dotenv**: Environment management

### External Services
- **Google Gemini API**: AI model
- **Authentication**: API Key in .env

## Data Flow

1. User inputs course and preference data
2. Frontend sends POST request to backend
3. Backend validates input
4. Backend creates optimized prompt
5. Gemini API processes prompt
6. Backend formats response
7. Frontend displays results

## Key Files

- `index.html`: Frontend UI
- `server.js`: Backend logic
- `package.json`: Dependencies
- `.env`: Configuration secrets

## Deployment Architecture

The application can be deployed on:
- **Render.com**: With environment variables
- **Heroku**: Similar setup
- **Local**: For development
- **Docker**: Containerized deployment

## Future Enhancements

- Database for schedule persistence
- User authentication system
- Schedule comparison tool
- Export functionality (PDF, Calendar)
- Mobile app version
