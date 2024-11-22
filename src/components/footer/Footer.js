import React from 'react';
import { Button, Stack } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { Mail } from '@mui/icons-material';
import InputBase from '@mui/material/InputBase';
import TypographyFooter from '@mui/material/Typography';
import BoxFooter from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import './Footer.css'

const Footer = () => {
    return (
        <div>
            <div className='part-one box'>

                <TypographyFooter
                    variant="h4"
                    sx={{
                        mb: 2,
                        fontWeight: 'bold',
                        color: '#fff'
                    }}
                >
                    Şirketiniz için Teknoloji yeteneği mi arıyorsunuz?
                </TypographyFooter>

                <TypographyFooter
                    variant="h5"
                    sx={{
                        mb: 4,
                        color: '#fff'
                    }}
                >
                    Birlikte etkinlik düzenlemek ve size ulaşmamız için şirket e-mail adresinizi girin! 🚀
                </TypographyFooter>


                <BoxFooter component="form" sx={{ mx: 'auto', mb: 4 }}>
                    <BoxFooter sx={{ display: 'flex', color: '#fff' }}>
                        <div className='input-sub'>
                            <InputBase
                                required
                                type="email"
                                placeholder="Şirket E-Mail Adresiniz"
                                startAdornment={
                                    <Mail sx={{ color: '#878787', mr: 1 }} />
                                }
                                endAdornment={
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        size="small"
                                        disableElevation
                                        sx={{
                                            backgroundColor: '#00C26D',
                                            '&:hover': {
                                                backgroundColor: '#388e3c',

                                            },
                                            maxWidth: '90px',
                                            padding: '7px',
                                            textTransform: 'none',
                                            fontWeight: 'bold',
                                            fontSize: '0.90rem',
                                        }}
                                    >
                                        Gönder
                                    </Button>
                                }
                                sx={{
                                    flex: 1,
                                    border: '1px solid #ddd',
                                    borderRadius: 1,
                                    px: 1,
                                    py: 1,
                                    backgroundColor: '#fff',
                                    width: '100%',
                                }}
                            />
                        </div>
                    </BoxFooter>
                </BoxFooter>

                <TypographyFooter variant="subtitle1" sx={{ mb: 1, color: '#00C26D', fontWeight: 'bold', fontSize: '1rem' }}>
                    Tüm soru ve önerileriniz için;
                </TypographyFooter>

                <BoxFooter sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 2
                }}>
                    <TypographyFooter>
                        <a href="mailto:hello@techcareer.net" style={{ textDecoration: 'none', color: 'inherit' }}>
                            hello@techcareer.net
                        </a>
                    </TypographyFooter>
                    <Divider orientation="vertical" flexItem sx={{ backgroundColor: '#fff' }} />
                    <TypographyFooter>
                        <a href="tel:0216 468 76 00" style={{ textDecoration: 'none', color: 'inherit' }}>
                            0216 468 76 00
                        </a>
                    </TypographyFooter>
                </BoxFooter>
            </div>


            <div className='part-two box'>
                <div className='footer-content'>
                    <Grid container>
                        <Grid size={{ xs: 12, md: 2 }} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                            <BoxFooter>
                                <TypographyFooter variant="body2" className="footer-menu-title" data-test="footer-menu-title" sx={{ color: '#878787', letterSpacing: '0.17px' }}>
                                    TECHCAREER
                                </TypographyFooter>

                                <BoxFooter sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '18px', letterSpacing: '0.025rem' }}>
                                    <a
                                        href="/about-us"
                                        style={{
                                            textDecoration: 'none',
                                            color: '#000',
                                            fontSize: '14px',
                                            fontWeight: '500',
                                        }}
                                    >
                                        Hakkımızda
                                    </a>
                                    <a
                                        href="/events"
                                        style={{
                                            textDecoration: 'none',
                                            color: '#000',
                                            fontSize: '14px',
                                            fontWeight: '500',
                                            textTransform: 'initial'
                                        }}
                                    >
                                        Etkinlikler
                                    </a>
                                    <a
                                        href="/sirketler-icin"
                                        style={{
                                            textDecoration: 'none',
                                            color: '#000',
                                            fontSize: '14px',
                                            fontWeight: '500',
                                        }}
                                    >
                                        Şirketler İçin
                                    </a>
                                    <a
                                        href="https://tr.techcareer.net/egitmen-basvurusu/"
                                        style={{
                                            textDecoration: 'none',
                                            color: '#000',
                                            fontSize: '14px',
                                            fontWeight: '500',
                                        }}
                                    >
                                        Eğitmen Ol
                                    </a>
                                    <a
                                        href="https://tr.techcareer.net/is-birligi/"
                                        style={{
                                            textDecoration: 'none',
                                            color: '#000',
                                            fontSize: '14px',
                                            fontWeight: '500',
                                        }}
                                    >
                                        İş Birliği
                                    </a>
                                    <a
                                        href="/contact"
                                        style={{
                                            textDecoration: 'none',
                                            color: '#000',
                                            fontSize: '14px',
                                            fontWeight: '500',
                                        }}
                                    >
                                        İletişim
                                    </a>
                                </BoxFooter>
                            </BoxFooter>
                        </Grid>

                        <Grid size={{ xs: 12, md: 2 }} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                            <BoxFooter>
                                <TypographyFooter variant="body2" className="footer-menu-title" data-test="footer-menu-title">
                                    BAŞVUR
                                </TypographyFooter>

                                <BoxFooter sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '18px', letterSpacing: '0.025rem' }}>
                                    <a
                                        href="/bootcamp"
                                        style={{
                                            textDecoration: 'none',
                                            color: '#000',
                                            fontSize: '14px',
                                            fontWeight: '500',
                                        }}
                                    >
                                        Bootcamp
                                    </a>
                                    <a
                                        href="/hackathon"
                                        style={{
                                            textDecoration: 'none',
                                            color: '#000',
                                            fontSize: '14px',
                                            fontWeight: '500',
                                        }}
                                    >
                                        Hackathon
                                    </a>
                                    <a
                                        href="/hiring-challenge"
                                        style={{
                                            textDecoration: 'none',
                                            color: '#000',
                                            fontSize: '14px',
                                            fontWeight: '500',
                                        }}
                                    >
                                        Hiring Challenge
                                    </a>
                                    <a
                                        href="/jobs"
                                        style={{
                                            textDecoration: 'none',
                                            color: '#000',
                                            fontSize: '14px',
                                            fontWeight: '500',
                                        }}
                                    >
                                        İş İlanları
                                    </a>
                                </BoxFooter>
                            </BoxFooter>
                        </Grid>

                        <Grid size={{ xs: 12, md: 2 }} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                            <BoxFooter>
                                <TypographyFooter variant="body2" className="footer-menu-title" data-test="footer-menu-title">
                                    SENİN İÇİN
                                </TypographyFooter>

                                <BoxFooter sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '18px', letterSpacing: '0.025rem' }}>
                                    <a
                                        href="/komunite"
                                        style={{
                                            textDecoration: 'none',
                                            color: '#000',
                                            fontSize: '14px',
                                            fontWeight: '500',
                                        }}
                                    >
                                        Komünite
                                    </a>
                                    <a
                                        href="/tdc"
                                        style={{
                                            textDecoration: 'none',
                                            color: '#000',
                                            fontSize: '14px',
                                            fontWeight: '500',
                                        }}
                                    >
                                        TDC
                                    </a>
                                    <a
                                        href="/blog"
                                        style={{
                                            textDecoration: 'none',
                                            color: '#000',
                                            fontSize: '14px',
                                            fontWeight: '500',
                                        }}
                                    >
                                        Blog
                                    </a>
                                    <a
                                        href="/podcast"
                                        style={{
                                            textDecoration: 'none',
                                            color: '#000',
                                            fontSize: '14px',
                                            fontWeight: '500',
                                        }}
                                    >
                                        Podcast
                                    </a>
                                    <a
                                        href="/kariyer-rehberi"
                                        style={{
                                            textDecoration: 'none',
                                            color: '#000',
                                            fontSize: '14px',
                                            fontWeight: '500',
                                        }}
                                    >
                                        Kariyer Rehberi
                                    </a>
                                    <a
                                        href="/teknik-sozluk"
                                        style={{
                                            textDecoration: 'none',
                                            color: '#000',
                                            fontSize: '14px',
                                            fontWeight: '500',
                                        }}
                                    >
                                        Teknik Sözlük
                                    </a>
                                </BoxFooter>
                            </BoxFooter>
                        </Grid>

                        <Grid size={{ xs: 12, md: 2 }} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                            <BoxFooter>
                                <TypographyFooter variant="body2" className="footer-menu-title" data-test="footer-menu-title">
                                    VERİ POLİTİKAMIZ
                                </TypographyFooter>

                                <BoxFooter sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '18px', letterSpacing: '0.025rem' }}>
                                    <a
                                        href="/aydinlatma-metni"
                                        style={{
                                            textDecoration: 'none',
                                            color: '#000',
                                            fontSize: '14px',
                                            fontWeight: '500',
                                        }}
                                    >
                                        Aydınlatma Metni
                                    </a>
                                    <a
                                        href="/hizmet-sozlesmesi"
                                        style={{
                                            textDecoration: 'none',
                                            color: '#000',
                                            fontSize: '14px',
                                            fontWeight: '500',
                                        }}
                                    >
                                        Hizmet Sözleşmesi
                                    </a>
                                    <a
                                        href="/acik-riza-metni"
                                        style={{
                                            textDecoration: 'none',
                                            color: '#000',
                                            fontSize: '14px',
                                            fontWeight: '500',
                                        }}
                                    >
                                        Açık Rıza Metni
                                    </a>
                                    <a
                                        href="/cerez-politikasi"
                                        style={{
                                            textDecoration: 'none',
                                            color: '#000',
                                            fontSize: '14px',
                                            fontWeight: '500',
                                        }}
                                    >
                                        Çerez Politikası
                                    </a>
                                </BoxFooter>
                            </BoxFooter>
                        </Grid>

                        {/* Logo and Social Media Section */}
                        <Grid size={{ xs: 12, md: 3 }} sx={{ pl: 5 }}>
                            <BoxFooter component="a" href="/" data-test="footer-logo">
                                <svg width="186" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <mask id="a" maskUnits="userSpaceOnUse" x="0" y="0" width="10" height="19"><path fill-rule="evenodd" clip-rule="evenodd" d="M.619.164h9.139v18.48H.619V.164z" fill="#fff" /></mask>
                                    <g mask="url(#a)"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.758 8.055H6.886v10.589h-3.8V8.054H.618v-2.93h2.466V.164l2.591.015c.67.004 1.21.548 1.21 1.217v3.728h2.872v2.93z" fill="#293349" /></g>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M20.59 10.637c-.116-1.596-1.451-2.553-3.163-2.553-1.537 0-2.9.725-3.307 2.553h6.47zm3.742 2.466H14.12c.406 1.566 1.683 2.437 3.51 2.437 1.364 0 2.728-.552 3.54-1.509l2.233 2.234c-1.276 1.712-3.655 2.64-6.034 2.64-4.148 0-7.195-2.843-7.195-7.02 0-4.382 3.308-7.109 7.195-7.109 3.859 0 7.021 2.727 7.021 6.876 0 .377-.029.841-.058 1.45zM25.608 11.826c0-4.294 3.481-7.05 7.427-7.05 2.466 0 4.439 1.16 5.715 2.901L35.907 9.68c-.61-.841-1.74-1.363-2.843-1.363-2.147 0-3.598 1.537-3.598 3.51 0 2.002 1.451 3.54 3.598 3.54 1.102 0 2.234-.523 2.843-1.364l2.843 2.002c-1.276 1.77-3.25 2.9-5.715 2.9-3.946 0-7.427-2.784-7.427-7.078zM53.414 11.217v7.427h-3.8v-7.021c0-2.147-1.277-3.104-2.582-3.104-1.364 0-3.046.725-3.046 3.191v6.934h-3.8V.187h2.583c.672 0 1.217.544 1.217 1.216v5.84c.58-1.712 2.756-2.467 4.061-2.467 3.54 0 5.396 2.38 5.367 6.44z" fill="#293349" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M55.293 11.826c0-4.296 3.483-7.054 7.432-7.054 2.467 0 4.441 1.161 5.718 2.903L65.6 9.678c-.61-.842-1.742-1.364-2.846-1.364-2.148 0-3.6 1.538-3.6 3.512 0 2.003 1.452 3.542 3.6 3.542 1.104 0 2.236-.523 2.846-1.365l2.844 2.003c-1.277 1.771-3.251 2.903-5.718 2.903-3.949 0-7.432-2.786-7.432-7.083zM80.258 11.855c0-2.09-1.741-3.484-3.512-3.484-1.916 0-3.513 1.48-3.513 3.484a3.506 3.506 0 0 0 3.513 3.512c1.858 0 3.512-1.451 3.512-3.512zm3.92-5.518v12.31h-3.804v-1.683c-.958 1.335-2.844 1.945-4.354 1.945-3.483 0-6.648-2.7-6.648-7.054s3.165-7.054 6.648-7.054c1.568 0 3.396.58 4.354 1.945V5.12h2.587c.672 0 1.216.545 1.216 1.217zM97.183 5.207l-.871 3.63a3.947 3.947 0 0 0-1.945-.494c-1.945 0-3.28 1.8-3.28 5.66v4.645h-3.803V5.12h2.557c.672 0 1.216.545 1.216 1.217v1.657c.755-2.264 2.294-3.222 3.977-3.222.726 0 1.539.116 2.149.435zM107.778 10.636c-.116-1.597-1.451-2.555-3.164-2.555-1.539 0-2.903.726-3.309 2.555h6.473zm3.745 2.467h-10.218c.406 1.568 1.683 2.439 3.512 2.439 1.364 0 2.729-.552 3.542-1.51l2.235 2.236c-1.277 1.712-3.658 2.641-6.038 2.641-4.151 0-7.2-2.844-7.2-7.025 0-4.383 3.31-7.112 7.2-7.112 3.861 0 7.025 2.729 7.025 6.88 0 .377-.029.842-.058 1.451zM123.396 10.636c-.116-1.597-1.452-2.555-3.165-2.555-1.538 0-2.902.726-3.309 2.555h6.474zm3.744 2.467h-10.218c.407 1.568 1.684 2.439 3.513 2.439 1.364 0 2.729-.552 3.541-1.51l2.236 2.236c-1.278 1.712-3.658 2.641-6.039 2.641-4.151 0-7.199-2.844-7.199-7.025 0-4.383 3.309-7.112 7.199-7.112 3.861 0 7.025 2.729 7.025 6.88 0 .377-.028.842-.058 1.451zM139.304 5.207l-.871 3.63a3.948 3.948 0 0 0-1.945-.494c-1.945 0-3.281 1.8-3.281 5.66v4.645h-3.802V5.12h2.557c.672 0 1.216.545 1.216 1.217v1.657c.755-2.264 2.294-3.222 3.978-3.222.725 0 1.538.116 2.148.435z" fill="#00C26D" />
                                    <mask id="b" maskUnits="userSpaceOnUse" x="138" y="14" width="5" height="5"><path fill-rule="evenodd" clip-rule="evenodd" d="M138.055 14.235h4.877v4.674h-4.877v-4.674z" fill="#fff" /></mask><g mask="url(#b)"><path fill-rule="evenodd" clip-rule="evenodd" d="M138.055 16.558c0-1.336 1.103-2.323 2.41-2.323 1.335 0 2.467.987 2.467 2.323 0 1.364-1.132 2.351-2.467 2.351-1.307 0-2.41-.987-2.41-2.351z" fill="#293349" /></g><path fill-rule="evenodd" clip-rule="evenodd" d="M158.753 11.217v7.431h-3.803v-7.025c0-2.148-1.277-3.106-2.584-3.106-1.364 0-3.048.726-3.048 3.193v6.938h-3.803V5.12h2.587c.672 0 1.216.545 1.216 1.217v1.048c.581-1.83 2.729-2.613 4.065-2.613 3.541 0 5.399 2.38 5.37 6.445zM171.293 10.636c-.116-1.597-1.451-2.555-3.164-2.555-1.539 0-2.903.726-3.309 2.555h6.473zm3.745 2.467H164.82c.406 1.568 1.683 2.439 3.512 2.439 1.365 0 2.729-.552 3.542-1.51l2.235 2.236c-1.277 1.712-3.658 2.641-6.038 2.641-4.151 0-7.199-2.844-7.199-7.025 0-4.383 3.309-7.112 7.199-7.112 3.861 0 7.025 2.729 7.025 6.88 0 .377-.029.842-.058 1.451zM185.082 8.052h-2.874v10.596h-3.803V8.052h-2.467V5.12h2.467V.156h2.587c.672 0 1.216.545 1.216 1.217V5.12h2.874v2.932z" fill="#293349" /></svg>
                            </BoxFooter>
                            <BoxFooter sx={{ mt: 2 }}>
                                <TypographyFooter variant="subtitle2" data-test="footer-slogan">
                                    Türkiye'nin teknoloji kariyeri platformu
                                </TypographyFooter>
                            </BoxFooter>
                            <BoxFooter sx={{ mt: 6, color: '#878787' }}>
                                <TypographyFooter variant="body2" data-test="footer-menu-title" sx={{ mb: 2.2 }}>
                                    SOSYAL MEDYA
                                </TypographyFooter>
                                <Stack direction="row" spacing={1} sx={{}}>
                                    <a href="https://www.linkedin.com/company/techcareernet" target="_blank" rel="noreferrer noopener" data-test="footer-social-linkedin">
                                        <svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-rule="evenodd"><path d="M16 31C7.716 31 1 24.284 1 16 1 7.716 7.716 1 16 1c8.284 0 15 6.716 15 15 0 8.284-6.716 15-15 15z" stroke="#D8D8D8" /><path fill-rule="evenodd" d="M9.598 21.92h2.753v-8.893H9.598v8.892zM10.962 11.862c.899 0 1.627-.735 1.627-1.641 0-.905-.728-1.64-1.627-1.64-.9 0-1.628.735-1.628 1.64 0 .906.729 1.641 1.628 1.641zM16.751 17.252c0-1.251.576-1.995 1.678-1.995 1.011 0 1.498.714 1.498 1.995v4.667h2.74v-5.63c0-2.382-1.35-3.534-3.236-3.534-1.886 0-2.68 1.47-2.68 1.47v-1.198h-2.64v8.892h2.64v-4.667z" fill="#1D1D1D" /></g></svg>                  </a>
                                    <a href="https://twitter.com/techcareernet" target="_blank" rel="noreferrer noopener" data-test="footer-social-twitter">
                                        <svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M16.25 30.8c-8.285 0-15-6.716-15-15 0-8.284 6.715-15 15-15 8.284 0 15 6.716 15 15 0 8.284-6.716 15-15 15z" stroke="#D8D8D8" /><path d="m9.78 9.8 4.95 6.62-4.98 5.38h1.12l4.361-4.71 3.524 4.71h3.815l-5.229-6.99 4.637-5.01h-1.121l-4.016 4.34-3.245-4.34H9.78zm1.65.827h1.752l7.739 10.348h-1.753L11.43 10.627z" fill="#000" /></svg>                  </a>
                                    <a href="https://www.instagram.com/techcareernet" target="_blank" rel="noreferrer noopener" data-test="footer-social-instagram">
                                        <svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-rule="evenodd"><path d="M16 31C7.716 31 1 24.282 1 16 1 7.715 7.716 1 16 1c8.285 0 15 6.716 15 15 0 8.283-6.715 15-15 15z" stroke="#D8D8D8" /><path fill-rule="evenodd" d="M16 8.707c-1.98 0-2.229.009-3.007.044-.776.036-1.306.159-1.77.34a3.56 3.56 0 0 0-1.291.84 3.565 3.565 0 0 0-.841 1.292c-.18.464-.304.993-.34 1.77-.035.778-.043 1.026-.043 3.006 0 1.981.008 2.23.044 3.007.035.776.159 1.306.339 1.77.186.48.435.887.84 1.292.406.405.813.655 1.293.841.463.18.993.304 1.77.34.777.034 1.026.043 3.006.043 1.98 0 2.229-.009 3.007-.044.776-.035 1.306-.159 1.77-.339.48-.186.886-.436 1.292-.841.405-.405.654-.812.841-1.291.18-.465.303-.995.339-1.77.035-.779.044-1.027.044-3.008 0-1.98-.01-2.228-.044-3.007-.036-.776-.159-1.305-.339-1.77a3.584 3.584 0 0 0-.841-1.29 3.561 3.561 0 0 0-1.292-.842c-.464-.18-.994-.303-1.77-.339-.778-.035-1.027-.044-3.007-.044zm0 1.314c1.947 0 2.178.007 2.947.043.71.032 1.097.15 1.354.251.34.132.584.29.839.545.255.256.413.498.545.839.1.257.218.643.25 1.354.036.769.043 1 .043 2.946 0 1.948-.007 2.178-.042 2.947-.033.712-.15 1.097-.25 1.354-.133.341-.291.584-.546.839a2.257 2.257 0 0 1-.84.545c-.256.1-.642.22-1.353.252-.77.034-1 .041-2.947.041s-2.178-.007-2.947-.041c-.71-.033-1.097-.151-1.354-.252a2.267 2.267 0 0 1-.838-.545 2.257 2.257 0 0 1-.546-.839c-.1-.257-.218-.642-.251-1.354-.035-.769-.042-1-.042-2.947 0-1.946.007-2.177.042-2.946.033-.711.152-1.097.251-1.354.132-.34.29-.583.546-.84.255-.254.498-.412.838-.544.257-.1.643-.219 1.354-.251.77-.036 1-.043 2.947-.043z" fill="#1D1D1D" /><path fill-rule="evenodd" d="M16 18.43a2.431 2.431 0 1 1 0-4.862 2.431 2.431 0 0 1 0 4.862zm0-6.175a3.745 3.745 0 1 0 0 7.49 3.745 3.745 0 0 0 0-7.49zM20.767 12.107a.876.876 0 1 1-1.751 0 .876.876 0 0 1 1.752 0z" fill="#1D1D1D" /></g></svg>                  </a>
                                    <a href="https://www.youtube.com/@techcareernet252" target="_blank" rel="noreferrer noopener" data-test="footer-social-youtube">
                                        <svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M16.25 30.8c-8.285 0-15-6.715-15-15 0-8.284 6.715-15 15-15 8.284 0 15 6.716 15 15 0 8.285-6.716 15-15 15z" stroke="#D8D8D8" stroke-width=".646" /><path fill-rule="evenodd" clip-rule="evenodd" d="M14.548 18.275v-4.948l4.348 2.474-4.348 2.474zm9.671-6.503a2.09 2.09 0 0 0-1.47-1.48c-1.297-.35-6.5-.35-6.5-.35s-5.201 0-6.499.35c-.715.192-1.279.76-1.47 1.48-.348 1.306-.348 4.03-.348 4.03s0 2.724.348 4.03a2.09 2.09 0 0 0 1.47 1.48c1.297.35 6.5.35 6.5.35s5.202 0 6.5-.35a2.088 2.088 0 0 0 1.47-1.48c.347-1.306.347-4.03.347-4.03s0-2.724-.348-4.03z" fill="#1D1D1D" /></svg>                  </a>
                                    <a href="https://www.facebook.com/techcareernet" target="_blank" rel="noreferrer noopener" data-test="footer-social-facebook">
                                        <svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-rule="evenodd"><path d="M16 31.001c-8.285 0-15-6.716-15-15C1 7.716 7.715 1 16 1c8.284 0 15 6.716 15 15 0 8.285-6.716 15.001-15 15.001z" stroke="#D8D8D8" /><path fill-rule="evenodd" d="M13.973 24.04h3.238v-8.108h2.259l.24-2.714h-2.499v-1.546c0-.64.128-.894.748-.894h1.752V7.961h-2.243c-2.409 0-3.495 1.062-3.495 3.092v2.165H12.29v2.748h1.684v8.074z" fill="#1D1D1D" /></g></svg>
                                    </a>
                                </Stack>
                            </BoxFooter>
                        </Grid>
                    </Grid>
                    <div>

                        <Divider className="css-1pn5eop" sx={{ mt: 3, mb: 3 }} />

                        {/* Language and Copyright Section */}
                        <Grid container className="css-2pzf5" sx={{ display: 'flex', justifyContent: 'space-between', color: '#878787' }}>
                            {/* Language Selector */}
                            <Grid item md={6} className="css-1y145nx" >
                                <BoxFooter className="css-jz2god" sx={{ display: 'flex' }}>
                                    <a href="https://www.techcareer.net" style={{ color: '#000' }}>
                                        <TypographyFooter variant="body1" className="css-btujp2" data-test="change-language-item-tr" sx={{ paddingRight: '16px' }} >
                                            TR
                                        </TypographyFooter>
                                    </a>
                                    <Divider orientation="vertical" flexItem />
                                    <a href="https://www.techcareer.net/en">
                                        <TypographyFooter variant="body1" className="css-12gt6gx" data-test="change-language-item-en" sx={{ padding: '0 16px' }}>
                                            EN
                                        </TypographyFooter>
                                    </a>
                                </BoxFooter>
                            </Grid>

                            {/* Copyright Info */}
                            <Grid item md={6} className="css-j4uo9q">
                                <Grid container className="css-kmcurt">
                                    <Grid item xs={12} md="auto" className="css-ulbauy">
                                        <TypographyFooter variant="caption" className="css-10cjgr2" data-test="footer-bottom-rights">
                                            Tüm hakları saklıdır
                                        </TypographyFooter>
                                    </Grid>
                                    <Grid item xs={12} md="auto" className="css-yicr3h" sx={{ pl: 2, pr: 2 }}>
                                        <TypographyFooter variant="caption" className="css-10cjgr2" data-test="footer-bottom-copyright">
                                            © Copyright 2024
                                        </TypographyFooter>
                                    </Grid>
                                    <Grid item xs={12} md="auto" className="css-ulbauy">
                                        <TypographyFooter
                                            variant="caption"
                                            component="a"
                                            href="mailto://support@techcareer.net"
                                            className="css-1f7r3jw"
                                            data-test="footer-bottom-mail"
                                        >
                                            support@techcareer.net
                                        </TypographyFooter>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>

                        {/* İşkur Section */}
                        <Grid item className="css-1m5mfel" sx={{ margin: '32px 0' }}>
                            <BoxFooter className="css-vtpeil" style={{ display: 'flex' }}>
                                <BoxFooter className="css-6pr531">
                                    <img
                                        alt="İşkur logo"
                                        width={57}
                                        height={55}
                                        src=""
                                        srcSet="/_next/image?url=%2Fassets%2Fimages%2Ffooter%2Fiskur.png&w=64&q=75 1x, /_next/image?url=%2Fassets%2Fimages%2Ffooter%2Fiskur.png&w=128&q=75 2x" //responsive tasarım için
                                        loading="lazy"
                                        style={{
                                            color: 'transparent', objectFit: 'contain',
                                            maxWidth: '100%',
                                            height: 'auto',
                                        }}
                                    />
                                </BoxFooter>
                                <BoxFooter className="css-0">
                                    <TypographyFooter variant="body1" align="justify" className="css-1gt1b6v">
                                        Kariyer.net Elektronik Yayıncılık ve İletişim Hizmetleri A.Ş. Özel İstihdam Bürosu olarak 31/08/2024 – 30/08/2027 tarihleri arasında faaliyette bulunmak üzere,
                                        Türkiye İş Kurumu tarafından 26/07/2024 tarih ve 16398069 sayılı karar uyarınca 170 nolu belge ile faaliyet göstermektedir.
                                        4904 sayılı kanun uyarınca iş arayanlardan ücret alınmayacak ve menfaat temin edilmeyecektir. Şikayetleriniz için aşağıdaki telefon numaralarına başvurabilirsiniz.
                                        Türkiye İş Kurumu İstanbul İl Müdürlüğü: 0212 249 29 87 Türkiye iş Kurumu İstanbul Çalışma ve İş Kurumu Ümraniye Hizmet Merkezi : 0216 523 90 26
                                    </TypographyFooter>
                                </BoxFooter>
                            </BoxFooter>
                        </Grid>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Footer;