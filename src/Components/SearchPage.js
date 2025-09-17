'use client';
import { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useRouter,  } from 'next/navigation';
import Link from 'next/link';
export default function SearchResults({ query = "", searchresults = [] }) {
  const router = useRouter();
const [searchTerm, setSearchTerm] = useState(query);
  useEffect(() => {
    setSearchTerm(query);
  }, [query]);
  const goSearch = () => {
    const q = (searchTerm || "").trim();
    router.push(`/search?query=${encodeURIComponent(q)}`);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") goSearch();
  };

  return (
    <Box
      py={{ md: '2%', xs: '3.63rem' }}
      sx={{ width: { md: '60%', xs: '96%', sm: '80%' }, m: 'auto' }}
    >
      {/* Search bar */}
      <Box
        display="flex"
        sx={{
          border: '3px solid #0486ff',
          p: '1%',
          borderRadius: '0.45rem',
          alignItems: 'center',
        }}
      >
        <SearchIcon sx={{ color: '#0486ff', mr: '1%', fontSize: { md: '1.5vw', xs: '1.5rem' } }} />
        <input
          placeholder="Search"
          className="Search-page"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleKeyDown}
          style={{ flex: 1, border: "none", outline: "none", fontSize: 16 }}
        />
      </Box>

      <Box className="Searchpage">
      {Array.isArray(searchresults) && searchresults.length > 0 ? (
        <>
          <Typography variant="body2" sx={{ mt: 2, opacity: 0.8 }}>
            Showing {searchresults.length} result(s) for <strong>{ query}</strong>
          </Typography>

          {searchresults.map((item, index) => (
            <Box
              key={index}
              sx={{
                boxShadow: '0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -4px rgba(0,0,0,.1)',
                p: { md: '2%', xs: '1rem' },
                mt: { md: '2%', xs: '2rem' },
                borderRadius: '1rem',
              }}
            >
              <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                {item.title}
              </Typography>

              {item.description ? (
                         <Box
              sx={{
                mt: "2%",
                "& li": {
                  listStyleType: "square",
                  listStylePosition: "outside",
                },
                "& li::marker": {
                  color: "#0486ff",
                  fontSize: { md: "1vw", xs: "1rem" },
                },
              }}
            >
              <span
                dangerouslySetInnerHTML={{
                  __html:(
                    item?.shortDescription || item?.description
                  ),
                }}
              />
            </Box>
              ) : null}

              <Link href={`${item.slug}`}>
                <Typography variant="body1" className="blueColor" sx={{ mt: 1 }}>
                  Read More
                </Typography>
              </Link>
            </Box>
          ))}
        </>
      ) : (
        <Typography variant="body1" mt={"4%"}>
          No results found for .
        </Typography>
      )}
      </Box>

    </Box>
  );
}
