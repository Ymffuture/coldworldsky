import React, { useEffect, useState } from "react";
import { useTransition, animated, useSpring } from "@react-spring/web";
import axios from "axios";
import toast from "react-hot-toast";
import { FaCheckSquare, FaCloudDownloadAlt, FaCopy, FaFacebookF, FaLinkedinIn, FaRedo, FaRegNewspaper, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import Loader from "../componets/Loader";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

const Quotes = () => {
  const [data, setData] = useState([]);
  const [visibleData, setVisibleData] = useState([]);
  const [count, setCount] = useState(0);
  const [dailyQuote, setDailyQuote] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const itemsPerClik = 2;

  const slideIn = {
    opacity: 0,
    transform: 'translateX(-200%)',
  };
  const slideOut = {
    opacity: 1,
    transform: 'translateX(0)',
  };
  const fadeIn = useSpring({ from: slideIn, to: slideOut, config: { duration: 1000 } });

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get("/datatype.json");
        setData(res.data);
        const today = new Date();
        const index = today.getDate() % res.data.length;
        setDailyQuote(res.data[index].quote);
      } catch (err) {
        setError(err);
      } finally {
        setTimeout(() => { setLoading(false); }, 5000);
      }
    };
    getData();
  }, []);

  const loadData = () => {
    if (data.length === 0) return; // Ensure data is not empty

    const nextCount = count + itemsPerClik;
    setVisibleData(data.slice(0, nextCount)); // Update visibleData correctly
    setCount(nextCount);
  };

  const transition = useTransition(visibleData, {
    from: { opacity: 0, transform: "translateY(20px)" },
    enter: { opacity: 1, transform: "translateY(0px)" },
    leave: { opacity: 0, transform: "translateY(-20px)" },
    keys: item => item.id, // Ensure 'id' exists in data
    config: { tension: 200, friction: 15 }
  });

  const copyText = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        toast.custom(<div className='text-bg-success p-2 rounded'><FaCheckSquare /> Copied to clipboard</div>, {
          duration: 5000,
          position: 'top-center',
          transition: ".6s all"
        });
      })
      .catch((err) => {
        toast.error("Failed to copy text.", {
          duration: 5000,
          position: 'center',
          style: {
            background: 'black',
            color: 'red'
          }
        });
        console.error(err);
      });
  };

  if (loading) return (
    <div className='load-dm'>
      <Loader />
      <div className="transition-animationhtml preload">
        <p className='g-3 center justify-content-center text-center'>
          Loading...
        </p>
      </div>
    </div>
  );

  if (error) return <div>
    <span className='err-text'>
      Error loading quotes: {error.message}
    </span>
  </div>;

  return (
    <>
      <header id="header" className="hero is-info is-fullheight-with-navbar">
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title is-2">
              Quotes
              <span className="has-text-info">.</span>
            </h1>
            <animated.p style={fadeIn} className="subtitle is-4">
              Daily Quote: <FaRegNewspaper />{" "}
              <b>{dailyQuote}</b>
            </animated.p>
            <animated.div style={fadeIn}>
              <Link to="/" className="button is-large is-link">
                Home
              </Link>
            </animated.div>
          </div>
        </div>
      </header>

      <div className="section">
        <h2 className="title is-3 has-text-centered">Quotes</h2>

        {transition((styles, item) => (
          <animated.code className="code" key={item.id} style={styles} data-tooltip-id="tooltip" data-tooltip-content={item.author}>
            <div className="box has-background-light">
              <p className="is-size-5">
                *** {item.quote} - <strong>{item.author}</strong>
              </p>
              <a onClick={() => copyText(item.quote)} title="Copy text">
                <FaCopy className="copy" />
              </a>

              <div className="social-share-icons">
                <div className="buttons has-addons is-centered">
                  <p className="control">
                    <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`} target="_blank" rel="noopener noreferrer" className="button is-dark" data-tooltip-id="tooltip-iconz-btn" data-tooltip-content="Share on Facebook">
                      <FaFacebookF />
                    </a>
                  </p>
                  <p className="control">
                    <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`} target="_blank" rel="noopener noreferrer" className="button is-info" data-tooltip-id="tooltip-iconz-btn" data-tooltip-content="Share on LinkedIn">
                      <FaLinkedinIn />
                    </a>
                  </p>
                  <p className="control">
                    <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent("Check out this quote!")} &url=${encodeURIComponent(window.location.href)}`} target="_blank" rel="noopener noreferrer" className="button is-primary" data-tooltip-id="tooltip-iconz-btn" data-tooltip-content="Share on Twitter">
                      <FaTwitter />
                    </a>
                  </p>
                  <p className="control">
                    <a href={`https://wa.me/?text=${encodeURIComponent("Check out this quote! " + window.location.href)}`} target="_blank" rel="noopener noreferrer" className="button is-success" data-tooltip-id="tooltip-iconz-btn" data-tooltip-content="Share on WhatsApp">
                      <FaWhatsapp />
                    </a>
                  </p>
                </div>
              </div>
              <hr />
            </div>
          </animated.code>
        ))}

        <div className="has-text-centered">
          <button onClick={loadData} className='button is-warning is-outlined' disabled={count >= data.length}>
            {count >= data.length ? <FaRedo /> : <FaCloudDownloadAlt />}
            Load More
          </button>
        </div>
      </div>

      <Tooltip id="tooltip" />
      <Tooltip id="tooltip-iconz-btn" />
    </>
  );
};

export default Quotes;

