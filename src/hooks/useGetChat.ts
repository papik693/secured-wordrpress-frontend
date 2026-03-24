export const useGetChat = () => {
  const sampleMessages = [
    { id: 1, sender: 'User', content: 'User Answer 1' },
    { id: 2, sender: 'Chat', content: 'Chat Answer 1' },
    { id: 3, sender: 'User', content: 'User Answer 2' },
    { id: 4, sender: 'Chat', content: 'Chat Answer 2' },
    { id: 5, sender: 'User', content: 'User Answer 3' },
    { id: 6, sender: 'Chat', content: 'Chat Answer 3' },
    { id: 7, sender: 'User', content: 'User Answer 4' },
    { id: 8, sender: 'Chat', content: 'Chat Answer 4' },
    { id: 9, sender: 'User', content: 'User Answer 5' },
    { id: 10, sender: 'Chat', content: 'Chat Answer 5' },
  ]

  return { messages: sampleMessages }
}
