import { createTheme, Pagination, Stack, ThemeProvider } from "@mui/material";
import React, { memo, useState } from "react";
import ExerciseGifCard from "./ExerciseGifCard";

const theme = createTheme({
  components: {
    // Name of the component
    MuiPaginationItem: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          color: "white",
        },
      },
    },
  },
});

function ExerciseGifCards({ exercises }) {
  const [currentPage, SetcurrentPage] = useState(1);
  const [exPerPage] = useState(9);

  const paginate = (e, value) => {
    SetcurrentPage(value);
    if (window.innerWidth > 1535) {
      window.scrollTo({ top: 1300, behavior: "smooth" });
    } else if (window.innerWidth <= 899) {
      window.scrollTo({ top: 1100, behavior: "smooth" });
    } else if (window.innerWidth <= 1535) {
      window.scrollTo({ top: 1150, behavior: "smooth" });
    }
  };

  const lastIndex = currentPage * exPerPage;
  const firstIndex = lastIndex - exPerPage;
  const filteredExercises = exercises.slice(firstIndex, lastIndex);

  return (
    <Stack>
      <Stack
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "repeat(1,auto)",
            md: "repeat(2,auto)",
            xl: "repeat(3,auto)",
            gap: "1rem",
          },
          justifyContent: { xs: "center", md: "space-between" },
        }}
        my={4}
      >
        {filteredExercises.map((item) => (
          <ExerciseGifCard item={item} key={item.id} />
        ))}
      </Stack>
      <Stack sx={{ alignItems: "center" }}>
        <ThemeProvider theme={theme}>
          <Pagination
            showFirstButton
            showLastButton
            defaultPage={1}
            count={Math.ceil(exercises.length / exPerPage)}
            page={currentPage}
            onChange={paginate}
            color="standard"
            shape="rounded"
            variant="outlined"
            size="large"
          />
        </ThemeProvider>
      </Stack>
    </Stack>
  );
}

export default memo(ExerciseGifCards);
