import React from 'react'
import './Community.css'
import communityImage from '../images/Group.png';
import communityImage2 from '../images/Group2.png';
import StackCommunity from '@mui/material/Stack';
import ButtonCommunity from '@mui/material/Button';

function Community() {
    return (
        <section class="community-communityContainer">
            <img src={communityImage} alt="Community" className='community-img1' />

            <div className='community-communityContentContainer'>
                <h1 className='community-communityTitle'>Komünite</h1>
                <p className='community-communityText'>Teknoloji Komünitesi ile hayalindeki işi bulabilir, kendini geliştirecek eğitimlere katılabilir ve teknoloji uzmanlarıyla tanışabilirsin!</p>

                <StackCommunity spacing={2} direction="row" sx={{ marginTop: "10px" }}>
                    <ButtonCommunity
                        variant="contained"
                        sx={{
                            backgroundColor: "#00B666",
                            color: "#FFFFFF",
                            textTransform: "none",
                            width: "192px",
                            height: "48px"
                        }}
                        onClick={() => window.open('https://www.techcareer.net/community', '_blank')}
                    >
                        Keşfet
                    </ButtonCommunity>
                </StackCommunity>
            </div>

            <img src={communityImage2} alt="Community" className='community-img2' />
        </section>
    )
}

export default Community