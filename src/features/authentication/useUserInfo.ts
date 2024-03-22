import { useQuery } from '@tanstack/react-query';
import { getUserInfo } from '../../services/apiAuth';
import { useUser } from './useUser';

export function useUserInfo() {
  const { userId } = useUser() as { userId: string };

  const { isLoading, data: userInfo } = useQuery({
    queryKey: ['userInfo'],
    queryFn: () => getUserInfo(userId),
  });

  return {
    isLoading,
    userInfo,
  };
}
