import type { Metadata } from 'next';
import Link from 'next/link';
import { allBlogs } from 'contentlayer/generated';
import ViewCounter from './view-counter';
import React from 'react';

export const metadata: Metadata = {
  title: 'Gallery',
  description: 'View My Artwork Through Different Styles.',
};

export default async function BlogPage() {
  return (
    <section>
      <h1 className="font-bold text-3xl font-serif mb-5">Gallery</h1>
      {allBlogs
        .sort((a, b) => {
          if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="flex flex-col space-y-1 mb-4"
            href={`/gallery/${post.slug}`}
          >
            <div className="w-full flex flex-col">
              <p>{post.title}</p>
              <ViewCounter slug={post.slug} trackView={false} />
            </div>
          </Link>
        ))}
    </section>
  );
}
