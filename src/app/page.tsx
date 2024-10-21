'use client';
import { useContext, useEffect, useState } from 'react';
import { Box, Button, CircularProgress, Stack } from '@mui/material';
import Link from 'next/link';

import { getContentHomePageSerive } from '@/services';
import { IGame, INewsGame } from '@/types';
import {
  ContentHot,
  ContentNews,
  ContentGamesPopular,
  ContentTopGames,
  ContentHowTo,
  ContentTipGuide,
} from '@/containers/Home';
import { ContextCommon, ContextCommonType } from '@/layouts/DefaultLayout';
import { Categories } from '@/components';

export default function Home() {
  const { loading, setLoading } = useContext(ContextCommon) as ContextCommonType;

  const [blogHotList, setBlogHotList] = useState<INewsGame[] | null>(null);
  const [newsGamesList, setNewsGamesList] = useState<INewsGame[] | null>(null);
  const [reviewPopularGameList, setReviewPopularGameList] = useState<IGame[] | null>(null);
  const [popularGameList, setPopularGameList] = useState<IGame[] | null>(null);
  const [reviewGamesList, setReviewGamesList] = useState<IGame[] | null>(null);
  const [howtoList, sethowtoList] = useState<INewsGame[] | null>(null);
  const [tipGuideList, setTipGuideList] = useState<INewsGame[] | null>(null);

  useEffect(() => {
    const getContent = async () => {
      try {
        setLoading(true);
        const response = await getContentHomePageSerive();
        const { blogHots, news, games, gameReviews, tipGuides, howto } = response.data;
        setBlogHotList(blogHots);
        setNewsGamesList(news);

        // Danh sách game có đánh giá phổ biến - giới hạn hiển thị 6 games.
        const populaRreviewGameListSorted: IGame[] = games
          .sort((a: IGame, b: IGame): number => {
            if (a.gameRating === null && b.gameRating !== null) return 1;
            if (a.gameRating !== null || b.gameRating === null) return -1;
            if (a.gameRating && b.gameRating)
              return a.gameRating < b.gameRating ? 1 : a.gameRating > b.gameRating ? -1 : 0;
            return -1;
          })
          .slice(0, 6);

        setReviewPopularGameList(populaRreviewGameListSorted);
        // Danh sách game có lượt chơi nhiều nhất - giới hạn hiển thị 6 games .
        const popularGameListSorted: IGame[] = games
          .sort((a: IGame, b: IGame): number => {
            if (a.gamePlayed === null && b.gamePlayed !== null) return 1;
            if (a.gamePlayed !== null || b.gamePlayed === null) return -1;
            if (a.gamePlayed && b.gamePlayed)
              return a.gamePlayed < b.gamePlayed ? 1 : a.gamePlayed > b.gamePlayed ? -1 : 0;
            return -1;
          })
          .slice(0, 6);
        setPopularGameList(popularGameListSorted);

        setReviewGamesList(gameReviews);
        sethowtoList(howto);
        setTipGuideList(tipGuides);
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    };
    getContent();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return (
      <Stack direction='row' className='justify-center h-[100vh] w-full items-center'>
        <CircularProgress size='3rem' />
      </Stack>
    );
  }

  return (
    <Box>
      <Box
        sx={{
          display: {
            md: 'block',
            xs: 'none',
          },
        }}>
        <Categories />
      </Box>
      {blogHotList && Array.isArray(blogHotList) && <ContentHot data={blogHotList} />}
      {newsGamesList && Array.isArray(newsGamesList) && <ContentNews data={newsGamesList} />}
      {reviewPopularGameList && Array.isArray(reviewPopularGameList) && (
        <ContentGamesPopular data={reviewPopularGameList} />
      )}
      {popularGameList && Array.isArray(popularGameList) && reviewGamesList && Array.isArray(reviewGamesList) && (
        <ContentTopGames topGames={popularGameList} top5GamesReviewed={reviewGamesList} />
      )}
      {howtoList && Array.isArray(howtoList) && <ContentHowTo data={howtoList} />}
      {tipGuideList && Array.isArray(tipGuideList) && <ContentTipGuide data={tipGuideList} />}
      <Box className='flex justify-center my-10 h-[46px] rounded-md'>
        <Button variant='contained' className='bg-[#00bceb] capitalize'>
          <Link href='/blogs'>More articles</Link>
        </Button>
      </Box>
    </Box>
  );
}
