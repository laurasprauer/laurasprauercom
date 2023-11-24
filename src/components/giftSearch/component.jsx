import React, { useEffect, useState } from 'react';
import SVG from '@components/svg';
import PropTypes from 'prop-types';
import * as styles from './styles.module.scss';

const LOADING_MESSAGES_ARRAY = [
  `Consulting the robots`,
  `Twiddling thumbs`,
  `Selecting wrapping paper`,
  `Counting backwards from infinity`,
];

const OCCASION_ARRAY = [
  'Anniversary',
  'Baby Shower',
  'Baptism',
  'Birthday',
  'Bridal Shower',
  'Christmas',
  'Easter',
  'Engagement',
  "Father's Day",
  'Graduation',
  'Halloween',
  'Hannukah',
  'Housewarming',
  'Just Because',
  'Kwanzaa',
  "Mother's Day",
  "New Year's Day",
  'Retirement',
  'Sympathy',
  'Thank You',
  "Valentine's Day",
  'Wedding',
  'White Elephant Gift',
];

export const GiftSearch = ({ darkmode }) => {
  const [age, setAge] = useState(30);
  const [gender, setGender] = useState('Unspecified');
  const [occasion, setOccasion] = useState('Christmas');
  const [cost, setCost] = useState('Unspecified');
  const [activeInterest, setActiveInterest] = useState('');
  const [interests, setInterests] = useState([]);

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [giftResultsArray, setGiftResultsArray] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState(0);

  useEffect(() => {
    if (loading && loadingMessage < 3) {
      setTimeout(() => {
        setLoadingMessage(loadingMessage + 1);
      }, 2000);
    } else if (!loading) {
      setLoadingMessage(0);
    }
  }, [loading, loadingMessage]);

  const saveAge = (e) => {
    setAge(e.target.value);
  };

  const saveGender = (e) => {
    setGender(e.target.value);
  };

  const saveOccasion = (e) => {
    setOccasion(e.target.value);
  };

  const saveCost = (e) => {
    setCost(e.target.value);
  };

  const saveActiveInterest = (e) => {
    setActiveInterest(e.target.value);
  };

  const addInterest = () => {
    const array = interests;
    array.push(activeInterest);
    setInterests(array);
    setActiveInterest('');
  };

  const checkForEnterKey = (e) => {
    if (e.keyCode == 13) {
      e.preventDefault();
      e.stopPropagation();
      // enter key pressed, save interest
      addInterest();
    }
  };

  const removeInterest = (interest) => {
    const array = interests.filter((item, index) => {
      if (item === interest) return false;
      return true;
    });
    setInterests(array);
  };

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const prompt = `Give me 8 ${occasion} gift ideas${
      cost !== 'Unspecified' ? ` ${cost}` : ''
    } in a bulleted list format for ${
      gender !== 'Unspecified' ? `a ${gender}` : 'someone'
    }, age ${age}${
      interests && interests.length > 0
        ? `, with the following interests: ${interests.join(', ')}.`
        : '.'
    } - Keep the list to product names only with no descriptions, with each list item starting with a dash. On even list items return products you would typically purchase from Amazon, and on odd numbers return products you would typically purchase from Etsy.`;

    try {
      const body = {
        messages: [{ role: 'user', content: prompt }],
        model: 'gpt-3.5-turbo',
      };

      const result = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.GATSBY_OPENAI_API_KEY}`,
        },
        body: JSON.stringify(body),
      }).then((response) => {
        return response.json();
      });

      const giftsArray = result?.choices[0]?.message?.content
        .replace(/(\r\n|\n|\r)/gm, '')
        .split('- ');

      giftsArray.shift();
      setLoading(false);
      setSuccess(true);
      setGiftResultsArray(giftsArray);
    } catch (e) {
      setLoading(false);
      setError('Oops! Something went wrong. Totally my bad.');
    }
  };

  return (
    <div className={`${styles.giftSearch} ${darkmode ? styles.darkmode : ''}`}>
      <div className={`${styles.header}`}>
        <svg viewBox="0 0 255 221">
          <g fill="none" fillRule="evenodd" stroke="#343434" strokeWidth="5">
            <path
              fill="#23E9A2"
              strokeLinejoin="round"
              d="M252 45.47v138.5a6.48 6.48 0 0 1-1.904 4.596 6.48 6.48 0 0 1-4.596 1.903h-129a6.48 6.48 0 0 1-4.596-1.903 6.48 6.48 0 0 1-1.904-4.597V45.47h142Z"
            />
            <path fill="#9E42F4" d="M251.5 105.97v24h-142v-24z" />
            <path fill="#9E42F4" d="M168.5 45.5h24v145h-24z" />
            <g fill="#9E42F4">
              <path d="M204.888 14.416a9.134 9.134 0 0 1 4.102 5.002 9.15 9.15 0 0 1-.224 6.473l-.997 1.874a4.365 4.365 0 0 1-.5.698l-13.253 15.089a4.351 4.351 0 0 1-2.997 1.475 4.361 4.361 0 0 1-4.517-5.413l5.001-20.018c.099-.394.252-.772.455-1.124l.746-1.294c1.692-2.205 3.667-3.385 5.8-3.813a9.134 9.134 0 0 1 6.384 1.05ZM218.282 33.369a7.435 7.435 0 0 1 .855 5.196 7.448 7.448 0 0 1-2.791 4.471l-1.499.935c-.191.11-.393.202-.603.273l-16.241 5.5c-.88.297-1.796.21-2.568-.17a3.359 3.359 0 0 1-.928-5.35l12.245-12.668a3.36 3.36 0 0 1 .736-.574l1.104-.638c2.067-.853 3.94-.88 5.618-.314a7.435 7.435 0 0 1 4.072 3.339ZM154.97 14.416a9.134 9.134 0 0 0-4.1 5.002 9.15 9.15 0 0 0 .222 6.473l.997 1.874c.144.248.311.482.5.698l13.253 15.089a4.351 4.351 0 0 0 2.998 1.475 4.361 4.361 0 0 0 4.517-5.413l-5.002-20.018a4.364 4.364 0 0 0-.454-1.124l-.747-1.294c-1.691-2.205-3.666-3.385-5.8-3.813a9.134 9.134 0 0 0-6.383 1.05ZM141.577 33.369a7.435 7.435 0 0 0-.856 5.196 7.448 7.448 0 0 0 2.792 4.471l1.498.935c.192.11.394.202.603.273l16.242 5.5c.88.297 1.796.21 2.567-.17a3.359 3.359 0 0 0 .928-5.35l-12.244-12.668a3.36 3.36 0 0 0-.736-.574l-1.105-.638c-2.066-.853-3.939-.88-5.617-.314a7.435 7.435 0 0 0-4.072 3.339ZM179.554 3.47c2.713 0 5.192 1.007 7.08 2.668a10.703 10.703 0 0 1 3.56 6.688l.086 2.446c0 .348-.034.694-.102 1.034l-4.457 22.32a5.264 5.264 0 0 1-2.248 3.358 5.276 5.276 0 0 1-8.006-2.94l-6.435-22.48a5.279 5.279 0 0 1-.204-1.453v-1.693c.424-3.247 1.733-5.598 3.645-7.28a10.684 10.684 0 0 1 7.08-2.669Z" />
            </g>
            <path
              fill="#9E42F4"
              strokeLinejoin="round"
              d="M149 124.5a6.48 6.48 0 0 1 4.596 1.904A6.48 6.48 0 0 1 155.5 131v18.5H2.5V131a6.48 6.48 0 0 1 1.904-4.596A6.48 6.48 0 0 1 9 124.5h140ZM150.5 149.5V212a6.48 6.48 0 0 1-1.904 4.596A6.48 6.48 0 0 1 144 218.5H15a6.48 6.48 0 0 1-4.596-1.904A6.48 6.48 0 0 1 8.5 212v-62.5h142Z"
            />
            <path
              fill="#23E9A2"
              d="M72.5 124.5h14v25h-14zM72.5 149.5h14v69h-14z"
            />
            <g transform="translate(32 91)">
              <g fill="#23E9A2" strokeLinejoin="round">
                <path d="m22.005 15 23.383 13.5-22.005 38.113-7.047-15.47L0 53.114zM48 28.5 71.383 15l22.004 38.113-16.92-1.631-6.462 15.13z" />
              </g>
              <g fill="#23E9A2" strokeLinejoin="round">
                <path d="m19.412-1.877.277.025 21.169 4.295a5.487 5.487 0 0 1 3.31 2.1 5.487 5.487 0 0 1 1.07 3.769L43.89 23.728a5.487 5.487 0 0 1-1.71 3.526 5.487 5.487 0 0 1-3.623 1.493l-21.13.56a5.483 5.483 0 0 1-3.93-1.507 5.484 5.484 0 0 1-1.715-4.007L13.57 3.132a5.483 5.483 0 0 1 1.943-3.734 5.484 5.484 0 0 1 4.176-1.25ZM73.838-1.877l-.277.025-21.169 4.295a5.487 5.487 0 0 0-3.309 2.1 5.487 5.487 0 0 0-1.071 3.769l1.348 15.416a5.487 5.487 0 0 0 1.71 3.526 5.487 5.487 0 0 0 3.624 1.493l21.129.56a5.483 5.483 0 0 0 3.93-1.507 5.484 5.484 0 0 0 1.716-4.007L79.68 3.132a5.483 5.483 0 0 0-1.944-3.734 5.484 5.484 0 0 0-4.176-1.25Z" />
              </g>
              <circle cx="47" cy="17" r="10.5" fill="#28FFB2" />
            </g>
          </g>
        </svg>
        <div>
          <h1>Find the Perfect Gift</h1>
          <p>
            Finding the perfect gift doesn&apos;t have to be difficult. Get gift
            ideas from{' '}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://platform.openai.com/docs/guides/text-generation"
            >
              {`Open AI's ChatGPT API`}
            </a>
            .
          </p>
        </div>
      </div>
      <form>
        <div className={`${styles.age}`}>
          <label>Age</label>
          <input
            type="number"
            id="age"
            name="age"
            placeholder={30}
            defaultValue={30}
            onKeyDown={saveAge}
            onBlur={saveAge}
            tabIndex="0"
          />
        </div>

        <div className={`${styles.gender}`}>
          <label htmlFor="gender">Gender</label>
          <SVG name="arrow" />
          <select
            id="gender"
            name="gender"
            onChange={saveGender}
            defaultValue="Unspecified"
          >
            <option value="Unspecified">Unspecified</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>

        <div className={`${styles.occasion}`}>
          <label htmlFor="occasion">Occasion</label>
          <SVG name="arrow" />
          <select
            id="occasion"
            name="occasion"
            onChange={saveOccasion}
            defaultValue="Christmas"
          >
            {OCCASION_ARRAY.map((item, index) => {
              return (
                <option key={`${item}-${index}`} value={item}>
                  {item}
                </option>
              );
            })}
          </select>
        </div>

        <div className={`${styles.cost}`}>
          <label htmlFor="cost">Cost</label>
          <SVG name="arrow" />
          <select
            id="cost"
            name="cost"
            onChange={saveCost}
            defaultValue="Unspecified"
          >
            <option value="Unspecified">Unspecified</option>
            <option value="Under $20">Under $20</option>
            <option value="Between $20 and $40">Between $20 and $40</option>
            <option value="Between $40 and $60">Between $40 and $60</option>
            <option value="Between $60 and $80">Between $60 and $80</option>
            <option value="Between $80 and $100">Between $80 and $100</option>
            <option value="Over $100">Over $100</option>
          </select>
        </div>

        <div className={`${styles.interests}`}>
          <div>
            <label>Interests</label>
            <input
              type="text"
              id="interests"
              name="interests"
              value={activeInterest}
              onChange={saveActiveInterest}
              onKeyDown={checkForEnterKey}
              placeholder="baking, woodworking, reading, etc."
              tabIndex="0"
            />
            <button type="button" disabled={loading} onClick={addInterest}>
              Add
            </button>
          </div>
        </div>
        {interests && interests.length > 0 ? (
          <div className={`${styles.addedInterests}`}>
            {interests.map((interest, index) => {
              return (
                <div key={`${interest}-${index}`}>
                  {interest}
                  <div
                    onClick={() => {
                      removeInterest(interest);
                    }}
                  >
                    <SVG name="X" />
                  </div>
                </div>
              );
            })}
          </div>
        ) : null}

        <div className={`${styles.submit}`}>
          <button type="submit" onClick={submit} disabled={loading}>
            Generate Gift Ideas
          </button>
        </div>

        {loading ? (
          <p className={`${styles.loadingMessage}`}>
            {LOADING_MESSAGES_ARRAY[loadingMessage]}
          </p>
        ) : null}

        {error && !loading ? <p className={styles.error}>{error}</p> : null}
      </form>

      <div className={styles.results}>
        {!loading && giftResultsArray && giftResultsArray.length > 0 ? (
          <h2>Gift Ideas</h2>
        ) : null}
        {!loading && giftResultsArray && giftResultsArray.length > 0
          ? giftResultsArray.map((gift, index) => {
              return (
                <h3 key={`gift-idea-${index}`}>
                  {gift}

                  <div>
                    {index % 2 == 0 ? (
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href={`https://www.amazon.com/s?k=${gift.replace(
                          /\s/g,
                          '+'
                        )}`}
                      >
                        View Amazon Products <SVG name="arrow" />
                      </a>
                    ) : (
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href={`https://www.etsy.com/search?q=${gift.replace(
                          /\s/g,
                          '%20'
                        )}&ref=search_bar`}
                      >
                        View Etsy Products <SVG name="arrow" />
                      </a>
                    )}
                  </div>
                </h3>
              );
            })
          : null}
      </div>
    </div>
  );
};

GiftSearch.propTypes = {
  darkmode: PropTypes.bool,
};

GiftSearch.defaultProps = {};

export default GiftSearch;
