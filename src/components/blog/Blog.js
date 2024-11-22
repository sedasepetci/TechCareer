import React from 'react';
import { Typography, Button } from '@mui/material';
import './Blog.css';
import { useState } from 'react';

const Blog = () => {
    // Her resim için ayrı state
    const [isOpen1, showText1] = useState(false);
    const [isOpen2, showText2] = useState(false);

    return (
        <div className='blog-container'>
            <div className='blog-section'>
                <div className='blog-header'>
                    <Typography variant="h4" sx={{ fontWeight: '500', color: '#000' }}>
                        Teknoloji Yeteneğinin Kod Günlüğü
                    </Typography>
                </div>
                <div className='blog-content box'>
                    <div className='content1'
                        style={{
                            transition: 'all 0.3s ease',
                            position: 'relative',
                            overflow: 'hidden',
                            borderRadius: '8px',
                            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                        }}>
                        <div style={{ height: '60px' }}>
                            <h3 onClick={() => showText1(!isOpen1)} style={{
                                color: '#fff', fontSize: '24px', position: 'absolute',
                                left: 10,
                                bottom: 50,
                                right: 0,
                                cursor: 'pointer',
                                transition: 'all 0.5s ease-in-out',
                                transform: isOpen1 ? 'translateY(-30px)' : 'translateY(0)',
                            }}>Luxoft Parking Hackathon
                            </h3>
                            <div style={{ width: '40%', display: 'flex', justifyContent: 'space-between' }}>
                                <div style={{
                                    display: 'flex', marginLeft: '10px', position: 'absolute',
                                    left: 0,
                                    bottom: 25,
                                    transition: 'all 0.5s ease-in-out',
                                    transform: isOpen1 ? 'translateY(-30px)' : 'translateY(0)',
                                }}>
                                    <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M4 2H10V0.5H11.5V2H12.25C12.6478 2 13.0294 2.15804 13.3107 2.43934C13.592 2.72064 13.75 3.10218 13.75 3.5V14C13.75 14.3978 13.592 14.7794 13.3107 15.0607C13.0294 15.342 12.6478 15.5 12.25 15.5H1.75C1.35218 15.5 0.970644 15.342 0.68934 15.0607C0.408035 14.7794 0.25 14.3978 0.25 14V3.5C0.25 3.10218 0.408035 2.72064 0.68934 2.43934C0.970644 2.15804 1.35218 2 1.75 2H2.5V0.5H4V2ZM1.75 5V14H12.25V5H1.75ZM3.25 7.25H4.75V8.75H3.25V7.25ZM6.25 7.25H7.75V8.75H6.25V7.25ZM9.25 7.25H10.75V8.75H9.25V7.25ZM9.25 10.25H10.75V11.75H9.25V10.25ZM6.25 10.25H7.75V11.75H6.25V10.25ZM3.25 10.25H4.75V11.75H3.25V10.25Z" fill="white" />
                                    </svg>
                                    <p style={{ color: '#fff', marginLeft: '5px' }}>8.11.2024</p>
                                </div>
                                <div style={{
                                    display: 'flex', marginLeft: '10px', position: 'absolute',
                                    left: 90,
                                    bottom: 22.5,
                                    transition: 'all 0.5s ease-in-out',
                                    transform: isOpen1 ? 'translateY(-30px)' : 'translateY(0)',
                                }}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15 11.5C15 12.163 14.7366 12.7989 14.2678 13.2678C13.7989 13.7366 13.163 14 12.5 14C11.837 14 11.2011 13.7366 10.7322 13.2678C10.2634 12.7989 10 12.163 10 11.5C10 10.837 10.2634 10.2011 10.7322 9.73223C11.2011 9.26339 11.837 9 12.5 9C13.163 9 13.7989 9.26339 14.2678 9.73223C14.7366 10.2011 15 10.837 15 11.5Z" fill="white" />
                                    </svg>
                                </div>
                                <div style={{
                                    display: 'flex', marginLeft: '10px', position: 'absolute',
                                    left: 110,
                                    bottom: 25,
                                    transition: 'all 0.5s ease-in-out',
                                    transform: isOpen1 ? 'translateY(-30px)' : 'translateY(0)',
                                }}>
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6.5 2.92857V1.5H10.75V2.92857H6.5ZM7.91667 10.7857H9.33333V6.5H7.91667V10.7857ZM8.625 16.5C7.75139 16.5 6.92783 16.3305 6.15433 15.9914C5.38083 15.6524 4.70508 15.1909 4.12708 14.6071C3.54908 14.0233 3.09174 13.3417 2.75504 12.5621C2.41835 11.7826 2.25 10.9524 2.25 10.0714C2.25 9.19047 2.41835 8.36 2.75504 7.58C3.09174 6.8 3.54908 6.11857 4.12708 5.53571C4.70508 4.95286 5.38107 4.49167 6.15504 4.15214C6.92901 3.81262 7.75233 3.64286 8.625 3.64286C9.35694 3.64286 10.0594 3.7619 10.7323 4C11.4052 4.23809 12.0368 4.58333 12.6271 5.03571L13.6187 4.03571L14.6104 5.03571L13.6187 6.03571C14.0674 6.63095 14.4097 7.26786 14.6458 7.94643C14.8819 8.625 15 9.33333 15 10.0714C15 10.9524 14.8317 11.7829 14.495 12.5629C14.1583 13.3429 13.7009 14.0243 13.1229 14.6071C12.5449 15.19 11.8689 15.6514 11.095 15.9914C10.321 16.3314 9.49767 16.5009 8.625 16.5ZM8.625 15.0714C9.99444 15.0714 11.1632 14.5833 12.1313 13.6071C13.0993 12.6309 13.5833 11.4524 13.5833 10.0714C13.5833 8.69047 13.0993 7.5119 12.1313 6.53571C11.1632 5.55952 9.99444 5.07143 8.625 5.07143C7.25556 5.07143 6.08681 5.55952 5.11875 6.53571C4.15069 7.5119 3.66667 8.69047 3.66667 10.0714C3.66667 11.4524 4.15069 12.6309 5.11875 13.6071C6.08681 14.5833 7.25556 15.0714 8.625 15.0714Z" fill="white" />
                                    </svg>
                                    <p style={{ color: '#fff', marginLeft: '5px' }}>2 Dakika</p>
                                </div>
                            </div>
                        </div>
                        <div className='' style={{
                            position: 'absolute',
                            bottom: isOpen1 ? '0' : '-100%', // state'e göre pozisyon
                            left: 0,
                            right: 0,
                            color: 'white',
                            padding: '20px',
                            transition: 'bottom 0.5s ease-in-out'
                        }}>
                            <p>Açıklama metni....</p>
                        </div>
                    </div>


                    <div className='content2' style={{
                        transition: 'all 0.3s ease',
                        position: 'relative',
                        overflow: 'hidden',
                        borderRadius: '8px',
                        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                    }}>
                        <div style={{ height: '60px' }}>
                            <h3 onClick={() => showText2(!isOpen2)} style={{
                                color: '#fff', fontSize: '24px', position: 'absolute',
                                left: 10,
                                bottom: 50,
                                right: 0,
                                cursor: 'pointer',
                                transition: 'all 0.5s ease-in-out',
                                transform: isOpen2 ? 'translateY(-30px)' : 'translateY(0)',
                            }}>FMSS Bilişim Android Development Bootcamp with Jetpack
                            </h3>
                            <div style={{ width: '40%', display: 'flex', justifyContent: 'space-between' }}>
                                <div style={{
                                    display: 'flex', marginLeft: '10px', position: 'absolute',
                                    left: 0,
                                    bottom: 25,
                                    transition: 'all 0.5s ease-in-out',
                                    transform: isOpen2 ? 'translateY(-30px)' : 'translateY(0)',
                                }}>
                                    <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M4 2H10V0.5H11.5V2H12.25C12.6478 2 13.0294 2.15804 13.3107 2.43934C13.592 2.72064 13.75 3.10218 13.75 3.5V14C13.75 14.3978 13.592 14.7794 13.3107 15.0607C13.0294 15.342 12.6478 15.5 12.25 15.5H1.75C1.35218 15.5 0.970644 15.342 0.68934 15.0607C0.408035 14.7794 0.25 14.3978 0.25 14V3.5C0.25 3.10218 0.408035 2.72064 0.68934 2.43934C0.970644 2.15804 1.35218 2 1.75 2H2.5V0.5H4V2ZM1.75 5V14H12.25V5H1.75ZM3.25 7.25H4.75V8.75H3.25V7.25ZM6.25 7.25H7.75V8.75H6.25V7.25ZM9.25 7.25H10.75V8.75H9.25V7.25ZM9.25 10.25H10.75V11.75H9.25V10.25ZM6.25 10.25H7.75V11.75H6.25V10.25ZM3.25 10.25H4.75V11.75H3.25V10.25Z" fill="white" />
                                    </svg>
                                    <p style={{ color: '#fff', marginLeft: '5px' }}>8.11.2024</p>
                                </div>
                                <div style={{
                                    display: 'flex', marginLeft: '10px', position: 'absolute',
                                    left: 90,
                                    bottom: 22.5,
                                    transition: 'all 0.5s ease-in-out',
                                    transform: isOpen2 ? 'translateY(-30px)' : 'translateY(0)',
                                }}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15 11.5C15 12.163 14.7366 12.7989 14.2678 13.2678C13.7989 13.7366 13.163 14 12.5 14C11.837 14 11.2011 13.7366 10.7322 13.2678C10.2634 12.7989 10 12.163 10 11.5C10 10.837 10.2634 10.2011 10.7322 9.73223C11.2011 9.26339 11.837 9 12.5 9C13.163 9 13.7989 9.26339 14.2678 9.73223C14.7366 10.2011 15 10.837 15 11.5Z" fill="white" />
                                    </svg>
                                </div>
                                <div style={{
                                    display: 'flex', marginLeft: '10px', position: 'absolute',
                                    left: 110,
                                    bottom: 25,
                                    transition: 'all 0.5s ease-in-out',
                                    transform: isOpen2 ? 'translateY(-30px)' : 'translateY(0)',
                                }}>
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6.5 2.92857V1.5H10.75V2.92857H6.5ZM7.91667 10.7857H9.33333V6.5H7.91667V10.7857ZM8.625 16.5C7.75139 16.5 6.92783 16.3305 6.15433 15.9914C5.38083 15.6524 4.70508 15.1909 4.12708 14.6071C3.54908 14.0233 3.09174 13.3417 2.75504 12.5621C2.41835 11.7826 2.25 10.9524 2.25 10.0714C2.25 9.19047 2.41835 8.36 2.75504 7.58C3.09174 6.8 3.54908 6.11857 4.12708 5.53571C4.70508 4.95286 5.38107 4.49167 6.15504 4.15214C6.92901 3.81262 7.75233 3.64286 8.625 3.64286C9.35694 3.64286 10.0594 3.7619 10.7323 4C11.4052 4.23809 12.0368 4.58333 12.6271 5.03571L13.6187 4.03571L14.6104 5.03571L13.6187 6.03571C14.0674 6.63095 14.4097 7.26786 14.6458 7.94643C14.8819 8.625 15 9.33333 15 10.0714C15 10.9524 14.8317 11.7829 14.495 12.5629C14.1583 13.3429 13.7009 14.0243 13.1229 14.6071C12.5449 15.19 11.8689 15.6514 11.095 15.9914C10.321 16.3314 9.49767 16.5009 8.625 16.5ZM8.625 15.0714C9.99444 15.0714 11.1632 14.5833 12.1313 13.6071C13.0993 12.6309 13.5833 11.4524 13.5833 10.0714C13.5833 8.69047 13.0993 7.5119 12.1313 6.53571C11.1632 5.55952 9.99444 5.07143 8.625 5.07143C7.25556 5.07143 6.08681 5.55952 5.11875 6.53571C4.15069 7.5119 3.66667 8.69047 3.66667 10.0714C3.66667 11.4524 4.15069 12.6309 5.11875 13.6071C6.08681 14.5833 7.25556 15.0714 8.625 15.0714Z" fill="white" />
                                    </svg>
                                    <p style={{ color: '#fff', marginLeft: '5px' }}>1 Dakika</p>
                                </div>
                            </div>
                        </div>
                        <div className='' style={{
                            position: 'absolute',
                            bottom: isOpen2 ? '0' : '-100%', // state'e göre pozisyon
                            left: 0,
                            right: 0,
                            color: 'white',
                            padding: '20px',
                            transition: 'bottom 0.5s ease-in-out'
                        }}>
                            <p>Açıklama metni....</p>
                        </div>
                    </div>
                </div>
                <div className='button'>
                    <Button
                        variant="contained"
                        href="/blog"  // veya istediğiniz yönlendirme linki
                        sx={{
                            backgroundColor: '#F6F6F6',
                            color: '#00C26D',
                            border: '1px solid #00C26D',
                            '&:hover': {
                                backgroundColor: '#00C26D',
                                color: '#fff'
                            },
                            padding: '8px 24px',
                            textTransform: 'none',
                            fontWeight: 'bold',
                            fontSize: '0.9rem',
                            borderRadius: '4px',
                            boxShadow: 'none',
                            maxWidth: '180px'
                        }}
                    >
                        Bloğumuzu İncele
                    </Button></div>
            </div>
        </div>
    );
};

export default Blog;