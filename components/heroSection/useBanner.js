import { getBanners } from "@/app/service/BannerApi";
import { useQuery } from "@tanstack/react-query";

export function useBanner() {
  const {
    data: banners,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["banners"],
    queryFn: getBanners,
  });

  return { banners, isLoading, isError };
}
