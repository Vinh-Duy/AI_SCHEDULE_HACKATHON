const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { GoogleGenerativeAI } = require('@google/generative-ai');

const app = express();
app.use(cors()); // Cho phép Frontend gọi được Backend
app.use(express.json());

// Khởi tạo Gemini với Key giấu trong file .env
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

app.post('/api/generate-schedule', async (req, res) => {
    try {
        const { courses, constraints } = req.body;
        
        if (!courses || !constraints) {
            return res.status(400).json({ error: 'Thiếu thông tin môn học hoặc nguyện vọng!' });
        }

        const prompt = `Bạn là một AI chuyên sắp xếp lịch học tối ưu cho sinh viên đại học.\n\nDANH SÁCH MÔN HỌC:\n${courses}\n\nNGUYỆN VỌNG:\n${constraints}\n\nTrình bày thời khóa biểu thật rõ ràng và giải thích ngắn gọn bằng tiếng Việt. Định dạng Markdown.`;

        // Gọi model Gemini 2.5 Flash
        const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
        const result = await model.generateContent(prompt);
        const responseText = result.response.text();

        res.json({ result: responseText });
    } catch (error) {
        console.error('Lỗi Backend:', error);
        res.status(500).json({ error: 'Có lỗi xảy ra khi xử lý yêu cầu AI.' });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Backend đang chạy ngon lành tại http://localhost:${PORT}`);
});