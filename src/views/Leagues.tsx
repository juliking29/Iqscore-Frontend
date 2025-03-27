import React from "react";
import MainLayout from "../layouts/MainLayout";
import LeaguesCard from "../components/common/Cards/CardsLeaguesPage/LeaguesCard";
import TooInterest from "../components/common/Cards/TooInterest";

const Leagues: React.FC = () => {
    return (
        <MainLayout>
            <LeaguesCard /> 
            <TooInterest />
        </MainLayout>
    );
};

export default Leagues;
