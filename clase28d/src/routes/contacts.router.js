import { Router } from 'express';
import { ContactsService } from '../repositories/index.js';

const router = Router();

router.get('/', async (req, res) => {
  const result = await ContactsService.getContacts();
  res.send({ status: 'success', payload: result });
});

router.post('/', async (req, res) => {
  const contact = req.body;

  const result = await ContactsService.createContact(contact);
  res.send({ status: 'success', payload: result });
});

export default router;
