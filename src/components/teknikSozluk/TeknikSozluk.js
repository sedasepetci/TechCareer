import React from 'react'
import PaperComNeler from '@mui/material/Paper';
import InputBaseComNeler from '@mui/material/InputBase';
import IconButtonComNeler from '@mui/material/IconButton';
import SearchIconComNeler from '@mui/icons-material/Search';
import StackComNeler from '@mui/material/Stack';
import ButtonComNeler from '@mui/material/Button';
import './TeknikSozluk.css'
import teknikSozlukImage from '../images/teknik-sozluk.png';


function TeknikSozluk() {
    return (
        <section className='tech-teknikSozlukContainer'>
            <img src={teknikSozlukImage} alt="Teknik Sözlük" className='tech-img' />

            <div className='tech-contentContainer'>
                <h1 className='tech-title'>Teknik Sözlük</h1>
                <p className='tech-text'>A’dan Z’ye tüm teknoloji terimlerinin tanımlarını senin için hazırladığımız teknoloji sözlüğünde bulabilirsin!</p>

                <PaperComNeler
                    component="form"
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        width: { xs: '90%', sm: '600px', md: '800px' },
                        height: 60,
                        borderRadius: 2,
                        margin: '20px',
                        backgroundColor: '#DCFBD5'
                    }}
                >
                    <IconButtonComNeler
                        type="button"
                        sx={{ p: '10px', marginLeft: '20px' }}
                        aria-label="search"
                    >
                        <SearchIconComNeler sx={{ fontSize: '2rem' }} />
                    </IconButtonComNeler>
                    <InputBaseComNeler
                        sx={{ ml: 1, flex: 1 }}
                        placeholder="Sözlük İçinde Ara"
                    />
                </PaperComNeler>

                <StackComNeler spacing={2} direction="row" sx={{ marginTop: "10px" }}>
                    <ButtonComNeler
                        variant="contained"
                        sx={{
                            backgroundColor: "#00B666",
                            color: "#FFFFFF",
                            textTransform: "none",
                            width: { xs: '100%', sm: "192px" },
                            height: "48px"
                        }}
                        onClick={() => window.open('https://www.techcareer.net/dictionary', '_blank')}
                    >
                        Kullanmak İçin Tıkla
                    </ButtonComNeler>
                </StackComNeler>
            </div>
        </section>
    )
}


export default TeknikSozluk