import React from "react";
import { Container } from "../../../reusecore/Layout";
import SistentWrapper from "./sistent.style";
import TOC from "../../../components/SistentNavigation";
import IntraPage from "../../../components/handbook-navigation/intra-page";
import SistentPagination from "../../../components/SistentNavigation/pagination";

const contents = [{ id: 0, link: "#About", text: "Hey Yo" }];

const SistentComponents = () => {
  return (
    <SistentWrapper>
      <div className="page-header-section">
        <h1>Components</h1>
      </div>
      <TOC />
      <div className="page-section">
        <Container>
          <div className="content">
            <a id="Identity">
              <h2>Components</h2>
            </a>
          </div>
          <SistentPagination />
        </Container>
        <IntraPage contents={contents} />
      </div>
    </SistentWrapper>
  );
};

export default SistentComponents;
