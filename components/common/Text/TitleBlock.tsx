import React from 'react';
import { TitleMed, PostTitleDesc } from '..';

export const TitleBlock = ({ title, desc }: { title: string; desc: string }) => {
  return (
    <>
      <TitleMed text={title} />
      <PostTitleDesc text={desc} />
    </>
  );
};
