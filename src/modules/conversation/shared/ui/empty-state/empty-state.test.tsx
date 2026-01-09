import { render, screen } from '@testing-library/react';
import { ConversationEmptyState } from './empty-state';

describe('ConversationEmptyState', () => {
  describe('chats', () => {
    it('показывает заголовок, подзаголовок и кнопку', () => {
      render(<ConversationEmptyState variant="chats" />);

      expect(screen.getByText('У вас пока нет чатов')).toBeInTheDocument();
      expect(screen.getByText('Начните общение и здесь всё появится')).toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'Начать чат' })).toBeInTheDocument();
    });

    it('содержит ссылку на /contacts', () => {
      render(<ConversationEmptyState variant="chats" />);

      expect(screen.getByRole('link')).toHaveAttribute('href', '/contacts');
    });
  });

  describe('contacts', () => {
    it('показывает только заголовок', () => {
      render(<ConversationEmptyState variant="contacts" />);

      expect(screen.getByText('Список контактов пока пуст')).toBeInTheDocument();
    });

    it('не показывает кнопку и ссылку', () => {
      render(<ConversationEmptyState variant="contacts" />);

      expect(screen.queryByRole('button')).not.toBeInTheDocument();
      expect(screen.queryByRole('link')).not.toBeInTheDocument();
    });
  });
});
