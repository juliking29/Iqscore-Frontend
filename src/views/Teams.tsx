import React from "react";
import MainLayout from "../layouts/MainLayout";
import TeamsCard from "../components/common/Cards/CardsTeamsPage/TeamsCard";
import TooInterest from "../components/common/Cards/TooInterest";

const Teams: React.FC = () => {
    return (
        <MainLayout>
            <TeamsCard />
            <TooInterest />
        </MainLayout>
    );
}; 

export default Teams;
