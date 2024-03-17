import HeaderFive from "@/components/homes/headers/HeaderFive";
import ShafilAhmedC from "@/components/homes/personalInfo/shafilahmedc";
import React from "react";

export const metadata = {
  title: "Shafil Ahmed Chowdhury",
  description:
    "Software Developer",
};
export default function shafilahmed() {
  return (
    <>
      <div className="page-wrapper page-wrapper-2">
        <HeaderFive />
        <div className="bostami-page-area z-index-3">
          <div className="container">
            <ShafilAhmedC />
          </div>
        </div>
      </div>
    </>
  );
}