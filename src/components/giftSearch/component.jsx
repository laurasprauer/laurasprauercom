import React, { useEffect, useState } from 'react';
import OpenAI from 'openai';
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
  const openai = new OpenAI({
    apiKey: process.env.GATSBY_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true,
  });

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
      const result = await openai.chat.completions.create({
        messages: [{ role: 'user', content: prompt }],
        model: 'gpt-3.5-turbo',
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
      <h1>Find the Perfect Gift</h1>
      <p>
        Finding the perfect gift doesn&apos;t have to be difficult. Try out the
        below form and get gifts ideas from the{' '}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://platform.openai.com/docs/guides/text-generation"
        >
          Open AI ChatGPT API
        </a>
        .
      </p>
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
        {!loading && giftResultsArray && giftResultsArray.length > 0
          ? giftResultsArray.map((gift, index) => {
              return (
                <h2 key={`gift-idea-${index}`}>
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
                </h2>
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
