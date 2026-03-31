import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { motion } from 'framer-motion';


export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          backgroundColor: 'rgba(0,0,0,0.55)',
          backdropFilter: 'blur(14px)',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
        }}
      >
        <Toolbar
          sx={{
            minHeight: { xs: 64, sm: 72 },
            display: 'flex',
            justifyContent: 'space-between',
            gap: 2,
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            style={{ display: 'flex', alignItems: 'center', gap: 10 }}
          >
            <Box
              sx={{
                width: 12,
                height: 12,
                borderRadius: 999,
                background: 'linear-gradient(45deg, #3b82f6, #8b5cf6, #ec4899)',
                boxShadow: '0 0 24px rgba(139,92,246,0.35)',
              }}
            />
            <Typography
              component="a"
              href="#top"
              sx={{
                textDecoration: 'none',
                fontWeight: 800,
                letterSpacing: '-0.02em',
                color: '#fff',
                fontSize: { xs: '1rem', sm: '1.05rem' },
              }}
            >
              Mohit Madelwar
            </Typography>
          </motion.div>

          <Box sx={{ display: 'flex', gap: { xs: 0.5, sm: 1 }, flexWrap: 'wrap' }}>
            {[
              { label: 'About', href: '#about' },
              { label: 'Work', href: '#projects' },
              { label: 'Skills', href: '#skills' },
              { label: 'Testimonials', href: '#testimonials' },
              { label: 'Contact', href: '#contact' },
            ].map((item) => (
              <Button
                key={item.href}
                component={motion.a}
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.98 }}
                href={item.href}
                color="inherit"
                sx={{
                  textTransform: 'none',
                  fontWeight: 650,
                  borderRadius: 999,
                  px: { xs: 1.2, sm: 1.5 },
                  py: 0.75,
                  color: 'rgba(255,255,255,0.9)',
                  '&:hover': {
                    backgroundColor: 'rgba(255,255,255,0.06)',
                  },
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>
        </Toolbar>
        <Box
          sx={{
            height: 2,
            background: 'linear-gradient(90deg, #3b82f6, #8b5cf6, #ec4899)',
            opacity: 0.75,
          }}
        />
      </AppBar>
    </Box>
  );
}