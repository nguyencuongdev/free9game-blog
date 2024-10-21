'use client';
import { useEffect, useState, useContext } from 'react';
import { Box, Button } from '@mui/material';
import Link from 'next/link';
import { getContentHomePageSerive } from '@/services';
import { IGame, INewsGame } from '@/types';

import {
  MenuContent,
  ContentHot,
  ContentNews,
  ContentGamesPopular,
  ContentTopGames,
  ContentTopApps,
  ContentHowTo,
  ContentTipGuide,
} from '@/containers/Home';
import { ContextCommon, ContextCommonType } from '@/layouts/DefaultLayout';

export default function Home() {
  const { loading, setLoading } = useContext(ContextCommon) as ContextCommonType;

  const [blogHotList, setBlogHotList] = useState<INewsGame[] | null>(null);
  const [newsGamesList, setNewsGamesList] = useState<INewsGame[] | null>(null);
  const [popularGameList, setPopularGameList] = useState<IGame[] | null>(null);
  const [reviewGamesList, setReviewGamesList] = useState<IGame[] | null>(null);
  const [newAppsList, setNewAppsList] = useState<IGame[] | null>(null);
  const [howtoList, sethowtoList] = useState<INewsGame[] | null>(null);
  const [tipGuideList, setTipGuideList] = useState<INewsGame[] | null>(null);

  useEffect(() => {
    const getContent = async () => {
      try {
        const response = await getContentHomePageSerive();
        const { blogHots, news, games, gameReviews, newApps, tipGuides, howto } = response.data;
        setBlogHotList(blogHots);
        setNewsGamesList(news);

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
        setNewAppsList(newApps);
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

  console.log('loading', loading);

  return (
    <Box>
      <Box
        sx={{
          display: {
            md: 'block',
            xs: 'none',
          },
        }}>
        <MenuContent />
      </Box>
      {blogHotList && Array.isArray(blogHotList) && <ContentHot data={blogHotList} />}
      {newsGamesList && Array.isArray(newsGamesList) && <ContentNews data={newsGamesList} />}
      {popularGameList && Array.isArray(popularGameList) && <ContentGamesPopular data={popularGameList} />}
      {popularGameList && Array.isArray(popularGameList) && reviewGamesList && Array.isArray(reviewGamesList) && (
        <ContentTopGames gameTop={popularGameList[0]} top5GamesReviewed={reviewGamesList} />
      )}
      {newAppsList && Array.isArray(newAppsList) && <ContentTopApps data={newAppsList} />}
      {howtoList && Array.isArray(newAppsList) && <ContentHowTo data={howtoList} />}
      {tipGuideList && Array.isArray(newAppsList) && <ContentTipGuide data={tipGuideList} />}
      <Box className='flex justify-center my-10 h-[46px] rounded-md'>
        <Button variant='contained' className='bg-[#00bceb] capitalize'>
          <Link href='/blogs'>More articles</Link>
        </Button>
      </Box>
    </Box>
  );
}
