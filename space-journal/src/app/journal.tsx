'use client'
import React, { useMemo } from 'react';
import dynamic from "next/dynamic";

const journal = () => {
  // this allows you to show a little loading thing while you wait for the import
  // also, this editor is only works on the client, so ssr is false to not server side render it
  // (i think that's what it does, i'm not 100% sure <- co-pilot suggested this)
  const TextEditor = useMemo(() => {
    return dynamic(() => import("../components/ui/text-editor"), {
      loading: () => <p>loading...</p>,
      ssr: false,
    });
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center justify-between .h-screen w-4/5">
      <div id="journal" className="align-top ">
        <h2 className='text-4xl pr-2'>What is on your mind?</h2>
        <TextEditor />
      </div>
    </div>
  );
};

export default journal;