"use client";
import React, { useEffect } from "react";
import MoviePagination from "@/components/movies/movie-pagination";
import { ImovieList } from "@/interface/movies";
import MoviesList from "@/components/movies/movies-list";
import { createQueryString } from "@/utils/format-string";
import { usePathname, useRouter } from "next/navigation";
import { scrollToTitleId } from "@/utils/scroll";
import Loading from "@/app/loc-phim/loading";

const FilterMovies = ({ searchParams, initialData }: { searchParams?: { [key: string]: string | undefined }; initialData: ImovieList }) => {
    // const queryClient = useQueryClient();
    // const router = useRouter();
    // const pathname = usePathname();
    // const page = searchParams?.page ? parseInt(searchParams.page) : 1;
    // const { data: movies, isFetching } = useQuery({
    //     queryKey: [
    //         "getMoviesFilter",
    //         searchParams?.page,
    //         searchParams?.sort,
    //         searchParams?.type,
    //         searchParams?.year,
    //         searchParams?.categories,
    //         searchParams?.status,
    //         searchParams?.country,
    //     ],
    //     queryFn: async () =>
    //         getFilterMovie(
    //             page,
    //             20,
    //             searchParams?.sort,
    //             searchParams?.type,
    //             searchParams?.year,
    //             searchParams?.categories,
    //             searchParams?.status,
    //             searchParams?.country
    //         ),
    //     refetchOnWindowFocus: false,
    //     initialData: initialData,
    //     enabled: searchParams?.page !== undefined && searchParams?.page !== null,
    // });
    // console.log(
    //     "initialData",
    //     initialData?.items.map((i) => i.view)
    // );
    // const handlePageClick = (data: { selected: number }) => {
    //     const queryString = createQueryString(searchParams, "page", (data.selected + 1).toString());
    //     queryClient.invalidateQueries({
    //         queryKey: ["getMoviesFilter", data.selected + 1, searchParams?.name],
    //     });
    //     scrollToTitleId("FilterListTitle");
    //     router.replace(`${pathname}?${queryString}`, { scroll: false });
    // };
    // return !isFetching ? (
    //     <>
    //         <MoviesList quality={50} enableBlur movies={movies} />
    //         <MoviePagination onPageClick={handlePageClick} totalPage={Math.ceil(movies?.pagination?.totalPages ?? 0)} />
    //     </>
    // ) : (
    //     <NewMovieSkeleton />
    // );
    const [loading, setLoading] = React.useState(false);
    const router = useRouter();
    const pathname = usePathname();
    useEffect(() => {
        setLoading(false);
    }, [initialData?.pagination?.currentPage]);
    const handlePageClick = (data: { selected: number }) => {
        setLoading(true);
        const queryString = createQueryString(searchParams, "page", (data.selected + 1).toString());

        scrollToTitleId("FilterListTitle");
        router.replace(`${pathname}?${queryString}`, { scroll: false });
    };
    return loading ? (
        <Loading />
    ) : (
        <>
            <MoviesList quality={50} enableBlur movies={initialData} />
            <MoviePagination onPageClick={handlePageClick} totalPage={Math.ceil(initialData?.pagination?.totalPages ?? 0)} />
        </>
    );
};

export default FilterMovies;