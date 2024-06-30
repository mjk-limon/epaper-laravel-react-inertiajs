import { Card } from "@mui/material";
import { useEffect, useState } from "react";

export default function PackageSlider() {
    const [cards, setCards] = useState([]);
    const [currentPage, setCurrentPage] = useState([]);
    const [slideDirection, setSlideDirection] = useState < "right" | "left" | undefined > ("left");

    const cardsPerPage = 3;
    const duplicateCards = Array.from({ length: 10 }, (_, i) => <Card key={i} />);

    const handleNextPage = () => {
        setSlideDirection("left");
        setCurrentPage(prevPage => prevPage + 1);
    }

    const handlePrevPage = () => {
        setSlideDirection("right");
        setCurrentPage(prevPage => prevPage - 1);
    }

    useEffect(() => {
        setCards(duplicateCards);
    }, []);
} 