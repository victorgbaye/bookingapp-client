import styled from "styled-components";

export const Wrapper = styled.section`
width: 100%;
    main{
        width: 100%;
        border-radius: 12px;
        border: 1px dashed #E3E3E3;
        background: #F2F2F2;
        height: 223px;
        display: flex;
        flex-direction: column;
        align-items: center;
        place-items: center;
        justify-content: center;
        gap: 8px;
        p{
            color: #434343;
            font-family: "Open Sans";
            font-size: 12px;
            font-style: normal;
            font-weight: 400;
            line-height: 160%; /* 19.2px */
            letter-spacing: 0.204px;
        }
    }
    
    .upload-service-button{
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 12px 20px;
        border-radius: var(--XS, 8px);
        border: 1px solid #E9BA67;        
        color: #222;
        font-family: 'Nunito';
        font-size: 14px;
        font-style: normal;
        font-weight: 600;
        line-height: 160%; /* 22.4px */
        letter-spacing: 0.238px;
        outline: none;
        max-height: 40px;
        cursor: pointer;
    }
    .container{
        width: 100%;
        height: auto;
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        max-height: 200px;
        overflow-y: auto;
        margin-top: 20px;
        gap: 18px;

        .image{
            width: 72px;
            height: 72px;
            position: relative;
            margin-bottom: 8px;

            img{
                width: 100%;
                height: 100%;
                border-radius: 8px;
            }
            .delete{
                position: absolute;
                top: -10px;
                right: -6px;
                font-size: 20px;
                padding: 3px;
                border-radius: 100%;
                /* background: #EFEFEF; */
                z-index: 2000; 
                cursor: pointer;

            }

        }
        .file{
            display: none;
        }
    }
    .upload-label{
        color: var(--greys-primary-800, #383838);
        font-family: "Open Sans";
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: 160%; /* 19.2px */
        letter-spacing: 0.204px;
        text-transform: capitalize;
        margin-bottom: 8px;
    }
`;