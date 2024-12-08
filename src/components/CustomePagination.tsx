import { Pagination, PaginationItem, Box } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

interface CustomPaginationProps {
  count: number;
  page: number;
  onChange: (event: React.ChangeEvent<unknown>, value: number) => void;
}

export default function CustomPagination({
  count,
  page,
  onChange,
}: CustomPaginationProps) {
  if (count <= 1) return null;

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        mt: 6,
        mb: 4,
      }}
    >
      <Pagination
        count={count}
        page={page}
        onChange={onChange}
        shape="rounded"
        hidePrevButton
        sx={{
          "& .MuiPaginationItem-root": {
            mx: 2,
            fontSize: "1rem",
            color: "text.secondary",
          },
          "& .Mui-selected": {
            bgcolor: "black !important",
            color: "gold !important",
          },
          "& .MuiPaginationItem-ellipsis": {
            border: "none",
          },
        }}
        renderItem={(item) => (
          <PaginationItem
            slots={{
              next: ArrowForwardIcon,
            }}
            {...item}
            sx={{
              border: "1px solid",
              borderColor: "divider",
              borderRadius: "24px",
              "&.Mui-selected": {
                border: "none",
              },
              "&:hover": {
                bgcolor: "grey.100",
              },
            }}
          />
        )}
      />
    </Box>
  );
}
