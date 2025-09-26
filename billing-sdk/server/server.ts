import express from 'express';
import type { Request, Response } from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.post('/session', async (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    sessionId: 'ses_' + Math.random().toString(36).substring(2, 9)
  });
});

app.post('/pay', async (req: Request, res: Response) => {
  if (!req.body || !req.body.cardNumber) {
    return res.status(400).json({ error: 'Invalid request payload' });
  }

  res.status(200).json({
    success: true,
    transactionId: 'txn_' + Math.random().toString(36).substring(2, 9)
  });
});

app.listen(PORT, () => {
  console.log(`Billing SDK server running on port ${PORT}`);
});

export default app;