import { Breadcrumbs, Link, Typography } from "@mui/material";
import { Box } from "@mui/system";

// helper function
function generateBreadcrumbs(parts = []) {
  return parts.map((part, index) => {
    const href = "/" + parts.slice(0, index + 1).join("/");
    const label = part.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
    return { href, label };
  });
}

export default function BreadcrumbServer({ parts = [], pageMeta }) {
  const breadcrumbs = generateBreadcrumbs(parts, pageMeta);

  return (
    <Box>
      <Breadcrumbs
        aria-label="breadcrumb"
        separator="›"
        sx={{
          "& .MuiBreadcrumbs-separator": {
            // mx: "0.5%",
            color:parts[parts.length - 1] === "about"?"white": "black",
            fontSize: {md:"1vw",xs:"1rem"},
          },
        }}
      >
        {/* Home link */}
        <Link underline="hover" href="/" sx={{ color: "#0486ff" }}>
          Home
        </Link>
        {breadcrumbs.map((bc, i) =>
          i === breadcrumbs.length - 1 ? (
            <Typography key={i}   color={parts[parts.length - 1] === "about" ? "white" : "black"}>
              {pageMeta?.title || bc.label}
            </Typography>
          ) : (
            <Link
              key={i} underline="hover"
              href={bc.href}
              sx={{ color: "#0486ff" }}
            >
              {bc.label}
            </Link>
          )
        )}
      </Breadcrumbs>
    </Box>
  );
}
