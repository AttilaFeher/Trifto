import { useQuery } from '@tanstack/react-query';
import { getUserInfo } from '../../services/apiAuth';

export function useUserInfo({ userId }: { userId: string }) {
  const { isLoading, data: userInfo } = useQuery({
    queryKey: ['userInfo', userId],
    queryFn: () => getUserInfo(userId),
  });

  return {
    isLoading,
    userInfo,
  };
}
