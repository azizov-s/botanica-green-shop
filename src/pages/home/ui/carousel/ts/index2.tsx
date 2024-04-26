import React from "react";
import EmblaCarousel from "./EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel";
import "../css/base.css";
import "../css/sandbox.css";
import "../css/embla.css";

const OPTIONS: EmblaOptionsType = {};
const SLIDE_COUNT = 3;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const EmblaCarousel2: React.FC = () => (
  <div className="">
    <EmblaCarousel slides={SLIDES} options={OPTIONS} />
  </div>
);

export default EmblaCarousel2;
