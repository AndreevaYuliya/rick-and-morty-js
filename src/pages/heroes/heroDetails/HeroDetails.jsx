import React, { useState, useEffect, use } from "react";

import { useParams, useNavigate } from "react-router";

import { Typography, CircularProgress, Alert } from "@mui/material";

import { getCharacter } from "../../../api/characters";
import { useScrollLock } from "../../../context/ScrollLockContext";

import { StyledDrawer, StyledBox, StyledAvatar } from "./styles";

const HeroDetails = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const [hero, setHero] = useState(null);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { setLocked } = useScrollLock();

  useEffect(() => {
    setLocked(!!hero);

    return () => {
      setLocked(false);
    };
  }, [hero, setLocked]);

  useEffect(() => {
    const fetchCharacter = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const character = await getCharacter(id);

        setHero(character);
      } catch (err) {
        setError(
          err.message || "Failed to load character details. Please try again.",
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchCharacter();
  }, [id]);

  return (
    <StyledDrawer
      open={hero !== null || !!error}
      anchor="right"
      onClose={() => {
        setHero(null);

        navigate("/heroes");
      }}
    >
      {isLoading && <CircularProgress />}

      {!isLoading && error && <Alert severity="error">{error}</Alert>}

      {!isLoading && hero && (
        <StyledBox>
          <StyledAvatar alt={hero?.name} src={hero?.image} />

          <Typography variant="h6">{hero?.name}</Typography>
          <Typography>Status: {hero?.status}</Typography>
        </StyledBox>
      )}
    </StyledDrawer>
  );
};

export default HeroDetails;
