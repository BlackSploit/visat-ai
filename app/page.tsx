"use client";

import Header from './components/Header';
import Footer from './components/Footer';
import TeacherGrid from './components/TeacherGrid';
import { Users, Video, MessageSquare, } from 'lucide-react';
import { useState } from 'react';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden text-white">

      {/* Grid background */}


      <div
        className="pointer-events-none absolute inset-0 z-[1]
  [mask-image:linear-gradient(to_right,black_50%,transparent_100%)]"
        style={{
          backgroundImage: `
      linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)
    `,
          backgroundSize: "60px 60px",
        }}
      />







      {/* ===== Background Lights ===== */}
      <div className="pointer-events-none absolute inset-0 z-0">





        {/* Pink left */}
        <div className="absolute top-100 -left-40 w-[500px] h-[500px]
                        bg-[rgba(185,9,118,0.6)]
                        rounded-full blur-[180px]" />



        {/* Hero right background image */} <div className="pointer-events-none absolute right-[-45%] md:right-[-25%] top-2/20 md:top-2/15 -translate-y-1/2 w-[200vw] md:w-[100vw] h-[300vh] md:h-[300vh] bg-[url('/images/AIAgents-bg.webp')] bg-contain bg-no-repeat bg-right opacity-90 -z-1 rotate-0" />










        {/* Blue right */}
        {/* Blue right - MetaView style */}
        {/* Strong right-side blue wash */}




        {/* Pink bottom center */}
        {/* <div className="absolute -bottom-40 left-1/2 -translate-x-1/2
                        w-[600px] h-[600px]
                        bg-[rgba(185,9,118,0.6)]
                        rounded-full blur-[220px]" /> */}
      </div>

      {/* ===== Content ===== */}
      <div className="relative z-10">
        <Header />

        <main className="wrapper py-12">

          {/* Hero Section */}
          {/* Hero Section */}
       <section className="relative mb-20 px-10 sm:px-6">

  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mt-20 sm:mt-24 lg:mt-28 max-w-6xl mx-auto">

    {/* ================= LEFT CONTENT ================= */}
    <div className="text-left">

      <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium leading-tight text-white pb-2 pt-4">
        VISAT-AI
        <span className="block text-white sm:text-neutral-400 text-2xl sm:text-3xl md:text-4xl mt-3 font-medium">
          Intelligent Academic Assistant for Students
        </span>
      </h1>

      <p className="text-white sm:text-neutral-400 max-w-xl mt-6 text-sm sm:text-base leading-relaxed">
        A Retrieval-Augmented Generation (RAG) powered AI system designed 
        exclusively for VISAT students. Access accurate information on 
        academics, departments, regulations, facilities, and institutional 
        updates — instantly and reliably.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 mt-8">
        <button
          onClick={() => {
            const scrollAmount = window.innerHeight * 0.6;
            window.scrollTo({
              top: window.scrollY + scrollAmount,
              behavior: "smooth",
            });
          }}
          className="btn-primary h-11 text-sm font-primary w-full sm:w-auto"
        >
          Explore Virtual Teachers
        </button>

        <button
          onClick={() => {
            window.location.href = "https://visat.in";
          }}
          className="btn-primary bg-white text-black h-11 text-sm font-primary w-full sm:w-auto"
        >
          Visit Official Website
        </button>
      </div>
    </div>

    {/* ================= RIGHT FEATURES GRID ================= */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-md lg:ml-auto mt-10 lg:mt-0">

      {/* Feature 1 */}
      <div className="feature-card">
        <img src="/images/components/globe.webp" className="w-12 h-12 mb-3" alt="" />
        <p className="font-semibold text-white text-lg">
          Department-Specific RAG System
        </p>
        <p className="text-sm text-white sm:text-neutral-400">
          Retrieval-Augmented AI trained on official syllabus and academic documents.
        </p>
      </div>

      {/* Feature 2 */}
      <div className="feature-card">
        <img src="/images/components/star.webp" className="w-12 h-12 mb-3" alt="" />
        <p className="font-semibold text-white text-lg">
          Syllabus-Based Knowledge
        </p>
        <p className="text-sm text-white sm:text-neutral-400">
          Answers aligned with prescribed curriculum and university regulations.
        </p>
      </div>

      {/* Feature 3 */}
      <div className="feature-card">
        <img src="/images/components/hourglass.webp" className="w-12 h-12 mb-3" alt="" />
        <p className="font-semibold text-white text-lg">
          Academic-Focused Assistance
        </p>
        <p className="text-sm text-white sm:text-neutral-400">
          Subject-level guidance across all VISAT departments.
        </p>
      </div>

      {/* Feature 4 */}
      <div className="feature-card">
        <img src="/images/components/globe.webp" className="w-12 h-12 mb-3" alt="" />
        <p className="font-semibold text-white text-lg">
          Verified Institutional Data
        </p>
        <p className="text-sm text-white sm:text-neutral-400">
          Responses generated from authenticated academic resources.
        </p>
      </div>

    </div>

  </div>
</section>



          {/* Teacher Grid */}

          <div>

          </div>
          <TeacherGrid />


        </main>

        <Footer />
      </div>
    </div>
  );
}
