import React from 'react';
import toast from "react-hot-toast";
import { Link } from 'react-router-dom';
import { Tooltip as ReactTooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import {
  FaCogs, FaEnvelope, FaFacebookF, FaGithub,
  FaLinkedinIn, FaPhoneAlt, FaWhatsapp
} from 'react-icons/fa';

import { Layout, Row, Col, Typography, Space } from 'antd';
import Subscription from './Subscription';
import style_ from '../styles/__style.module.css';
import Button from './button/Button';
import Logo from './logo/Logo';

const { Footer: AntFooter } = Layout;
const { Title, Paragraph, Link: AntLink } = Typography;

const Footer = () => {
  const social = [
    { openlink: "https://www.facebook.com/QuorvexInstitute", label: 'Facebook', icon: <FaFacebookF className='fs-5' /> },
    { openlink: "https://github.com/ymffuture", label: 'GitHub', icon: <FaGithub className='fs-5' /> },
    { openlink: 'https://www.linkedin.com/in/kgomotsonkosi-l', label: 'Linkedin', icon: <FaLinkedinIn className='fs-5' /> },
    { openlink: 'https://wa.me/27653935339', label: 'Whatsapp', icon: <FaWhatsapp className='fs-5' /> },
  ];

  const copyText = (text) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        toast.success('Email copied to clipboard', {
          duration: 5000,
          position: 'top-center',
        });
      })
      .catch((err) => {
        toast.error("Failed to copy text.", {
          duration: 5000,
          position: 'center',
          style: { background: 'black', color: 'red' }
        });
        console.error(err);
      });
  };

  const notWorkingBtn = () => {
    toast.error('This feature is under construction.', {
      duration: 10000,
      style: {
        borderRadius: '50px',
        background: '#fff34b',
        opacity: 1,
        fontWeight: 800,
      },
      position: 'bottom-center',
      icon: <FaCogs />
    });
  };

  return (
    <AntFooter className="text-center" id="footer" style={{ background: '#001529', color: '#fff' }}>
      {[...Array(5)].map((_, index) => <div className='mainer' key={index}></div>)}

      <Row gutter={[24, 24]} className="p-3">
        <Col xs={24} sm={12} md={8}>
          <Logo />
        </Col>

        <Col xs={24} sm={12} md={8}>
          <Title level={5} className='th text-white'>Quick Links</Title>
          <Space direction="vertical" size="small">
            <Link to="/" className={style_.a}>Home</Link>
            <Link to="/tic-tac-toe" className="text-white">Game</Link>
            <Link to="/calendar" className="text-white">Calendar</Link>
            <Link to="/quotes" className="text-white">Quotes</Link>
            <Link to="/location" className="text-white">Coverage radius</Link>
            <Link to="/cbp/pricing" className="text-white">Choose best prices</Link>
          </Space>
        </Col>

        <Col xs={24} sm={24} md={8}>
          <Title level={5} className='th text-white'>Contact Us</Title>
          <Paragraph onClick={() => copyText('quorvexinstitute@zohomail.com')} className='cursor-pointer text-white'>
            <FaEnvelope /> quorvexinstitute@zohomail.com
          </Paragraph>
          <Paragraph className='tel text-white'>
            <FaPhoneAlt />
            <a href='tel:+27634414863' className='text-white'> (+27) 63 441 4863</a>
          </Paragraph>
          <Button />
        </Col>
      </Row>

      <div id="contact" className='id mt-4'>
        <Subscription />
        <ul className='list-inline'>
          {social.map((iconLink, index) => (
            <li key={index} className='list-inline-item'>
              <Link
                to={iconLink.openlink}
                data-tooltip-id={iconLink.label}
                data-tooltip-content={iconLink.label}
              >
                {iconLink.icon}
              </Link>
            </li>
          ))}
        </ul>
        {social.map(s => (
          <ReactTooltip id={s.label} key={s.label} />
        ))}
      </div>

      <Paragraph className="mt-4 text-white">
        &copy; {new Date().getFullYear()} Quorvex Institute. Powered by{' '}
        <Link to="https://webpy-7tcd.onrender.com/views/Privacy-Policy" className="text-white" rel="nofollow">
          Quorvex
        </Link>
      </Paragraph>

      <div className='moon' onClick={notWorkingBtn}>
        <div className='moon2'></div>
      </div>
    </AntFooter>
  );
};

export default Footer;
