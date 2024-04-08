import { useEffect } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { chatSubscription } from '../../services/apiChats';
import { RealtimeChannel } from '@supabase/supabase-js';

export function useChatSubscription(chatId: string) {
  const queryClient = useQueryClient();

  useEffect(() => {
    let subscription: RealtimeChannel;

    const initializeSubscription = async () => {
      subscription = await chatSubscription(() =>
        queryClient.invalidateQueries({
          queryKey: ['user', 'chats', chatId],
        }),
      );
      console.log(subscription);
    };

    initializeSubscription();
    // Cleanup function
    return function () {
      if (subscription) {
        subscription.unsubscribe();
      }
    };
  }, [queryClient]);

  return null;
}
