import HeaderFive from "@/components/homes/headers/HeaderFive";
// import PersonalInfoTwo from "@/components/homes/personalInfo/PersonalInfoTwo";
import KumarVinod from "@/components/homes/personalInfo/KumarVinod";
import React from "react";

export const metadata = {
  title: "Kumar Vinod",
  description:
    "CEO of Intelligent Smooth Technology LLC",
};
export default function ShajidAhamed() {
  return (
    <>
      <div className="page-wrapper page-wrapper-2">
        <HeaderFive />
        <div className="bostami-page-area z-index-3">
          <div className="container">
            <KumarVinod />
          </div>
        </div>
      </div>
    </>
  );
}