const xml2js = require("xml2js");
const moment = require("moment");

var parser = new xml2js.Parser();

const xml = `
<tableInfo>
  <pageNo>1</pageNo>
  <numOfRows>200</numOfRows>
  <totalCnt>100</totalCnt>
  <resultCode>200</resultCode>
  <resultMsg>SUCCESS</resultMsg>
  <list>
    <row>
      <DIRECTION>1</DIRECTION>
      <TIME>0525</TIME>
      <CLASS>0</CLASS>
      <RNUM>1</RNUM>
      <ROUTENAME>124(율리공영차고지종점 방면)</ROUTENAME>
      <ROUTENO>124</ROUTENO>
      <DPTCSEQNO>1</DPTCSEQNO>
    </row>
    <row>
      <DIRECTION>1</DIRECTION>
      <TIME>0540</TIME>
      <CLASS>0</CLASS>
      <RNUM>2</RNUM>
      <ROUTENAME>124(율리공영차고지종점 방면)</ROUTENAME>
      <ROUTENO>124</ROUTENO>
      <DPTCSEQNO>2</DPTCSEQNO>
    </row>
    <row>
      <DIRECTION>1</DIRECTION>
      <TIME>0555</TIME>
      <CLASS>0</CLASS>
      <RNUM>3</RNUM>
      <ROUTENAME>124(율리공영차고지종점 방면)</ROUTENAME>
      <ROUTENO>124</ROUTENO>
      <DPTCSEQNO>3</DPTCSEQNO>
    </row>
    <row>
      <DIRECTION>1</DIRECTION>
      <TIME>0610</TIME>
      <CLASS>0</CLASS>
      <RNUM>4</RNUM>
      <ROUTENAME>124(율리공영차고지종점 방면)</ROUTENAME>
      <ROUTENO>124</ROUTENO>
      <DPTCSEQNO>4</DPTCSEQNO>
    </row>
    <row>
      <DIRECTION>1</DIRECTION>
      <TIME>0630</TIME>
      <CLASS>0</CLASS>
      <RNUM>5</RNUM>
      <ROUTENAME>124(율리공영차고지종점 방면)</ROUTENAME>
      <ROUTENO>124</ROUTENO>
      <DPTCSEQNO>5</DPTCSEQNO>
    </row>
    <row>
      <DIRECTION>1</DIRECTION>
      <TIME>0650</TIME>
      <CLASS>0</CLASS>
      <RNUM>6</RNUM>
      <ROUTENAME>124(율리공영차고지종점 방면)</ROUTENAME>
      <ROUTENO>124</ROUTENO>
      <DPTCSEQNO>6</DPTCSEQNO>
    </row>
    <row>
      <DIRECTION>1</DIRECTION>
      <TIME>0705</TIME>
      <CLASS>0</CLASS>
      <RNUM>7</RNUM>
      <ROUTENAME>124(율리공영차고지종점 방면)</ROUTENAME>
      <ROUTENO>124</ROUTENO>
      <DPTCSEQNO>7</DPTCSEQNO>
    </row>
    <row>
      <DIRECTION>1</DIRECTION>
      <TIME>0725</TIME>
      <CLASS>0</CLASS>
      <RNUM>8</RNUM>
      <ROUTENAME>124(율리공영차고지종점 방면)</ROUTENAME>
      <ROUTENO>124</ROUTENO>
      <DPTCSEQNO>8</DPTCSEQNO>
    </row>
    <row>
      <DIRECTION>1</DIRECTION>
      <TIME>0745</TIME>
      <CLASS>0</CLASS>
      <RNUM>9</RNUM>
      <ROUTENAME>124(율리공영차고지종점 방면)</ROUTENAME>
      <ROUTENO>124</ROUTENO>
      <DPTCSEQNO>9</DPTCSEQNO>
    </row>
    <row>
      <DIRECTION>1</DIRECTION>
      <TIME>0805</TIME>
      <CLASS>0</CLASS>
      <RNUM>10</RNUM>
      <ROUTENAME>124(율리공영차고지종점 방면)</ROUTENAME>
      <ROUTENO>124</ROUTENO>
      <DPTCSEQNO>10</DPTCSEQNO>
    </row>
    <row>
      <DIRECTION>1</DIRECTION>
      <TIME>0825</TIME>
      <CLASS>0</CLASS>
      <RNUM>11</RNUM>
      <ROUTENAME>124(율리공영차고지종점 방면)</ROUTENAME>
      <ROUTENO>124</ROUTENO>
      <DPTCSEQNO>11</DPTCSEQNO>
    </row>
    <row>
      <DIRECTION>1</DIRECTION>
      <TIME>0840</TIME>
      <CLASS>0</CLASS>
      <RNUM>12</RNUM>
      <ROUTENAME>124(율리공영차고지종점 방면)</ROUTENAME>
      <ROUTENO>124</ROUTENO>
      <DPTCSEQNO>12</DPTCSEQNO>
    </row>
    <row>
      <DIRECTION>1</DIRECTION>
      <TIME>0910</TIME>
      <CLASS>0</CLASS>
      <RNUM>13</RNUM>
      <ROUTENAME>124(율리공영차고지종점 방면)</ROUTENAME>
      <ROUTENO>124</ROUTENO>
      <DPTCSEQNO>13</DPTCSEQNO>
    </row>
    <row>
      <DIRECTION>1</DIRECTION>
      <TIME>0925</TIME>
      <CLASS>0</CLASS>
      <RNUM>14</RNUM>
      <ROUTENAME>124(율리공영차고지종점 방면)</ROUTENAME>
      <ROUTENO>124</ROUTENO>
      <DPTCSEQNO>14</DPTCSEQNO>
    </row>
    <row>
      <DIRECTION>1</DIRECTION>
      <TIME>0940</TIME>
      <CLASS>0</CLASS>
      <RNUM>15</RNUM>
      <ROUTENAME>124(율리공영차고지종점 방면)</ROUTENAME>
      <ROUTENO>124</ROUTENO>
      <DPTCSEQNO>15</DPTCSEQNO>
    </row>
    <row>
      <DIRECTION>1</DIRECTION>
      <TIME>0955</TIME>
      <CLASS>0</CLASS>
      <RNUM>16</RNUM>
      <ROUTENAME>124(율리공영차고지종점 방면)</ROUTENAME>
      <ROUTENO>124</ROUTENO>
      <DPTCSEQNO>16</DPTCSEQNO>
    </row>
    <row>
      <DIRECTION>1</DIRECTION>
      <TIME>1020</TIME>
      <CLASS>0</CLASS>
      <RNUM>17</RNUM>
      <ROUTENAME>124(율리공영차고지종점 방면)</ROUTENAME>
      <ROUTENO>124</ROUTENO>
      <DPTCSEQNO>17</DPTCSEQNO>
    </row>
    <row>
      <DIRECTION>1</DIRECTION>
      <TIME>1050</TIME>
      <CLASS>0</CLASS>
      <RNUM>18</RNUM>
      <ROUTENAME>124(율리공영차고지종점 방면)</ROUTENAME>
      <ROUTENO>124</ROUTENO>
      <DPTCSEQNO>18</DPTCSEQNO>
    </row>
    <row>
      <DIRECTION>1</DIRECTION>
      <TIME>1105</TIME>
      <CLASS>0</CLASS>
      <RNUM>19</RNUM>
      <ROUTENAME>124(율리공영차고지종점 방면)</ROUTENAME>
      <ROUTENO>124</ROUTENO>
      <DPTCSEQNO>19</DPTCSEQNO>
    </row>
    <row>
      <DIRECTION>1</DIRECTION>
      <TIME>1125</TIME>
      <CLASS>0</CLASS>
      <RNUM>20</RNUM>
      <ROUTENAME>124(율리공영차고지종점 방면)</ROUTENAME>
      <ROUTENO>124</ROUTENO>
      <DPTCSEQNO>20</DPTCSEQNO>
    </row>
    <row>
      <DIRECTION>1</DIRECTION>
      <TIME>1145</TIME>
      <CLASS>0</CLASS>
      <RNUM>21</RNUM>
      <ROUTENAME>124(율리공영차고지종점 방면)</ROUTENAME>
      <ROUTENO>124</ROUTENO>
      <DPTCSEQNO>21</DPTCSEQNO>
    </row>
    <row>
      <DIRECTION>1</DIRECTION>
      <TIME>1205</TIME>
      <CLASS>0</CLASS>
      <RNUM>22</RNUM>
      <ROUTENAME>124(율리공영차고지종점 방면)</ROUTENAME>
      <ROUTENO>124</ROUTENO>
      <DPTCSEQNO>22</DPTCSEQNO>
    </row>
    <row>
      <DIRECTION>1</DIRECTION>
      <TIME>1220</TIME>
      <CLASS>0</CLASS>
      <RNUM>23</RNUM>
      <ROUTENAME>124(율리공영차고지종점 방면)</ROUTENAME>
      <ROUTENO>124</ROUTENO>
      <DPTCSEQNO>23</DPTCSEQNO>
    </row>
    <row>
      <DIRECTION>1</DIRECTION>
      <TIME>1235</TIME>
      <CLASS>0</CLASS>
      <RNUM>24</RNUM>
      <ROUTENAME>124(율리공영차고지종점 방면)</ROUTENAME>
      <ROUTENO>124</ROUTENO>
      <DPTCSEQNO>24</DPTCSEQNO>
    </row>
    <row>
      <DIRECTION>1</DIRECTION>
      <TIME>1255</TIME>
      <CLASS>0</CLASS>
      <RNUM>25</RNUM>
      <ROUTENAME>124(율리공영차고지종점 방면)</ROUTENAME>
      <ROUTENO>124</ROUTENO>
      <DPTCSEQNO>25</DPTCSEQNO>
    </row>
    <row>
      <DIRECTION>1</DIRECTION>
      <TIME>1315</TIME>
      <CLASS>0</CLASS>
      <RNUM>26</RNUM>
      <ROUTENAME>124(율리공영차고지종점 방면)</ROUTENAME>
      <ROUTENO>124</ROUTENO>
      <DPTCSEQNO>26</DPTCSEQNO>
    </row>
    <row>
      <DIRECTION>1</DIRECTION>
      <TIME>1345</TIME>
      <CLASS>0</CLASS>
      <RNUM>27</RNUM>
      <ROUTENAME>124(율리공영차고지종점 방면)</ROUTENAME>
      <ROUTENO>124</ROUTENO>
      <DPTCSEQNO>27</DPTCSEQNO>
    </row>
    <row>
      <DIRECTION>1</DIRECTION>
      <TIME>1425</TIME>
      <CLASS>0</CLASS>
      <RNUM>28</RNUM>
      <ROUTENAME>124(율리공영차고지종점 방면)</ROUTENAME>
      <ROUTENO>124</ROUTENO>
      <DPTCSEQNO>28</DPTCSEQNO>
    </row>
    <row>
      <DIRECTION>1</DIRECTION>
      <TIME>1440</TIME>
      <CLASS>0</CLASS>
      <RNUM>29</RNUM>
      <ROUTENAME>124(율리공영차고지종점 방면)</ROUTENAME>
      <ROUTENO>124</ROUTENO>
      <DPTCSEQNO>29</DPTCSEQNO>
    </row>
    <row>
      <DIRECTION>1</DIRECTION>
      <TIME>1500</TIME>
      <CLASS>0</CLASS>
      <RNUM>30</RNUM>
      <ROUTENAME>124(율리공영차고지종점 방면)</ROUTENAME>
      <ROUTENO>124</ROUTENO>
      <DPTCSEQNO>30</DPTCSEQNO>
    </row>
    <row>
      <DIRECTION>1</DIRECTION>
      <TIME>1520</TIME>
      <CLASS>0</CLASS>
      <RNUM>31</RNUM>
      <ROUTENAME>124(율리공영차고지종점 방면)</ROUTENAME>
      <ROUTENO>124</ROUTENO>
      <DPTCSEQNO>31</DPTCSEQNO>
    </row>
    <row>
      <DIRECTION>1</DIRECTION>
      <TIME>1540</TIME>
      <CLASS>0</CLASS>
      <RNUM>32</RNUM>
      <ROUTENAME>124(율리공영차고지종점 방면)</ROUTENAME>
      <ROUTENO>124</ROUTENO>
      <DPTCSEQNO>32</DPTCSEQNO>
    </row>
    <row>
      <DIRECTION>1</DIRECTION>
      <TIME>1600</TIME>
      <CLASS>0</CLASS>
      <RNUM>33</RNUM>
      <ROUTENAME>124(율리공영차고지종점 방면)</ROUTENAME>
      <ROUTENO>124</ROUTENO>
      <DPTCSEQNO>33</DPTCSEQNO>
    </row>
    <row>
      <DIRECTION>1</DIRECTION>
      <TIME>1620</TIME>
      <CLASS>0</CLASS>
      <RNUM>34</RNUM>
      <ROUTENAME>124(율리공영차고지종점 방면)</ROUTENAME>
      <ROUTENO>124</ROUTENO>
      <DPTCSEQNO>34</DPTCSEQNO>
    </row>
    <row>
      <DIRECTION>1</DIRECTION>
      <TIME>1640</TIME>
      <CLASS>0</CLASS>
      <RNUM>35</RNUM>
      <ROUTENAME>124(율리공영차고지종점 방면)</ROUTENAME>
      <ROUTENO>124</ROUTENO>
      <DPTCSEQNO>35</DPTCSEQNO>
    </row>
    <row>
      <DIRECTION>1</DIRECTION>
      <TIME>1705</TIME>
      <CLASS>0</CLASS>
      <RNUM>36</RNUM>
      <ROUTENAME>124(율리공영차고지종점 방면)</ROUTENAME>
      <ROUTENO>124</ROUTENO>
      <DPTCSEQNO>36</DPTCSEQNO>
    </row>
    <row>
      <DIRECTION>1</DIRECTION>
      <TIME>1730</TIME>
      <CLASS>0</CLASS>
      <RNUM>37</RNUM>
      <ROUTENAME>124(율리공영차고지종점 방면)</ROUTENAME>
      <ROUTENO>124</ROUTENO>
      <DPTCSEQNO>37</DPTCSEQNO>
    </row>
    <row>
      <DIRECTION>1</DIRECTION>
      <TIME>1750</TIME>
      <CLASS>0</CLASS>
      <RNUM>38</RNUM>
      <ROUTENAME>124(율리공영차고지종점 방면)</ROUTENAME>
      <ROUTENO>124</ROUTENO>
      <DPTCSEQNO>38</DPTCSEQNO>
    </row>
    <row>
      <DIRECTION>1</DIRECTION>
      <TIME>1820</TIME>
      <CLASS>0</CLASS>
      <RNUM>39</RNUM>
      <ROUTENAME>124(율리공영차고지종점 방면)</ROUTENAME>
      <ROUTENO>124</ROUTENO>
      <DPTCSEQNO>39</DPTCSEQNO>
    </row>
    <row>
      <DIRECTION>1</DIRECTION>
      <TIME>1845</TIME>
      <CLASS>0</CLASS>
      <RNUM>40</RNUM>
      <ROUTENAME>124(율리공영차고지종점 방면)</ROUTENAME>
      <ROUTENO>124</ROUTENO>
      <DPTCSEQNO>40</DPTCSEQNO>
    </row>
    <row>
      <DIRECTION>1</DIRECTION>
      <TIME>1900</TIME>
      <CLASS>0</CLASS>
      <RNUM>41</RNUM>
      <ROUTENAME>124(율리공영차고지종점 방면)</ROUTENAME>
      <ROUTENO>124</ROUTENO>
      <DPTCSEQNO>41</DPTCSEQNO>
    </row>
    <row>
      <DIRECTION>1</DIRECTION>
      <TIME>1930</TIME>
      <CLASS>0</CLASS>
      <RNUM>42</RNUM>
      <ROUTENAME>124(율리공영차고지종점 방면)</ROUTENAME>
      <ROUTENO>124</ROUTENO>
      <DPTCSEQNO>42</DPTCSEQNO>
    </row>
    <row>
      <DIRECTION>1</DIRECTION>
      <TIME>1950</TIME>
      <CLASS>0</CLASS>
      <RNUM>43</RNUM>
      <ROUTENAME>124(율리공영차고지종점 방면)</ROUTENAME>
      <ROUTENO>124</ROUTENO>
      <DPTCSEQNO>43</DPTCSEQNO>
    </row>
    <row>
      <DIRECTION>1</DIRECTION>
      <TIME>2010</TIME>
      <CLASS>0</CLASS>
      <RNUM>44</RNUM>
      <ROUTENAME>124(율리공영차고지종점 방면)</ROUTENAME>
      <ROUTENO>124</ROUTENO>
      <DPTCSEQNO>44</DPTCSEQNO>
    </row>
    <row>
      <DIRECTION>1</DIRECTION>
      <TIME>2025</TIME>
      <CLASS>0</CLASS>
      <RNUM>45</RNUM>
      <ROUTENAME>124(율리공영차고지종점 방면)</ROUTENAME>
      <ROUTENO>124</ROUTENO>
      <DPTCSEQNO>45</DPTCSEQNO>
    </row>
    <row>
      <DIRECTION>1</DIRECTION>
      <TIME>2040</TIME>
      <CLASS>0</CLASS>
      <RNUM>46</RNUM>
      <ROUTENAME>124(율리공영차고지종점 방면)</ROUTENAME>
      <ROUTENO>124</ROUTENO>
      <DPTCSEQNO>46</DPTCSEQNO>
    </row>
    <row>
      <DIRECTION>1</DIRECTION>
      <TIME>2100</TIME>
      <CLASS>0</CLASS>
      <RNUM>47</RNUM>
      <ROUTENAME>124(율리공영차고지종점 방면)</ROUTENAME>
      <ROUTENO>124</ROUTENO>
      <DPTCSEQNO>47</DPTCSEQNO>
    </row>
    <row>
      <DIRECTION>1</DIRECTION>
      <TIME>2135</TIME>
      <CLASS>0</CLASS>
      <RNUM>48</RNUM>
      <ROUTENAME>124(율리공영차고지종점 방면)</ROUTENAME>
      <ROUTENO>124</ROUTENO>
      <DPTCSEQNO>48</DPTCSEQNO>
    </row>
    <row>
      <DIRECTION>1</DIRECTION>
      <TIME>2220</TIME>
      <CLASS>0</CLASS>
      <RNUM>49</RNUM>
      <ROUTENAME>124(율리공영차고지종점 방면)</ROUTENAME>
      <ROUTENO>124</ROUTENO>
      <DPTCSEQNO>49</DPTCSEQNO>
    </row>
    <row>
      <DIRECTION>1</DIRECTION>
      <TIME>2240</TIME>
      <CLASS>0</CLASS>
      <RNUM>50</RNUM>
      <ROUTENAME>124(율리공영차고지종점 방면)</ROUTENAME>
      <ROUTENO>124</ROUTENO>
      <DPTCSEQNO>50</DPTCSEQNO>
    </row>
    <row>
      <DIRECTION>2</DIRECTION>
      <TIME>0510</TIME>
      <CLASS>0</CLASS>
      <RNUM>51</RNUM>
      <ROUTENAME>124(대왕암공원 방면)</ROUTENAME>
      <ROUTENO>124</ROUTENO>
      <DPTCSEQNO>1</DPTCSEQNO>
    </row>
    <row>
      <DIRECTION>2</DIRECTION>
      <TIME>0525</TIME>
      <CLASS>0</CLASS>
      <RNUM>52</RNUM>
      <ROUTENAME>124(대왕암공원 방면)</ROUTENAME>
      <ROUTENO>124</ROUTENO>
      <DPTCSEQNO>2</DPTCSEQNO>
    </row>
    <row>
      <DIRECTION>2</DIRECTION>
      <TIME>0545</TIME>
      <CLASS>0</CLASS>
      <RNUM>53</RNUM>
      <ROUTENAME>124(대왕암공원 방면)</ROUTENAME>
      <ROUTENO>124</ROUTENO>
      <DPTCSEQNO>3</DPTCSEQNO>
    </row>
    <row>
      <DIRECTION>2</DIRECTION>
      <TIME>0605</TIME>
      <CLASS>0</CLASS>
      <RNUM>54</RNUM>
      <ROUTENAME>124(대왕암공원 방면)</ROUTENAME>
      <ROUTENO>124</ROUTENO>
      <DPTCSEQNO>4</DPTCSEQNO>
    </row>
    <row>
      <DIRECTION>2</DIRECTION>
      <TIME>0625</TIME>
      <CLASS>0</CLASS>
      <RNUM>55</RNUM>
      <ROUTENAME>124(대왕암공원 방면)</ROUTENAME>
      <ROUTENO>124</ROUTENO>
      <DPTCSEQNO>5</DPTCSEQNO>
    </row>
    <row>
      <DIRECTION>2</DIRECTION>
      <TIME>0645</TIME>
      <CLASS>0</CLASS>
      <RNUM>56</RNUM>
      <ROUTENAME>124(대왕암공원 방면)</ROUTENAME>
      <ROUTENO>124</ROUTENO>
      <DPTCSEQNO>6</DPTCSEQNO>
    </row>
    <row>
      <DIRECTION>2</DIRECTION>
      <TIME>0700</TIME>
      <CLASS>0</CLASS>
      <RNUM>57</RNUM>
      <ROUTENAME>124(대왕암공원 방면)</ROUTENAME>
      <ROUTENO>124</ROUTENO>
      <DPTCSEQNO>7</DPTCSEQNO>
    </row>
    <row>
      <DIRECTION>2</DIRECTION>
      <TIME>0725</TIME>
      <CLASS>0</CLASS>
      <RNUM>58</RNUM>
      <ROUTENAME>124(대왕암공원 방면)</ROUTENAME>
      <ROUTENO>124</ROUTENO>
      <DPTCSEQNO>8</DPTCSEQNO>
    </row>
    <row>
      <DIRECTION>2</DIRECTION>
      <TIME>0740</TIME>
      <CLASS>0</CLASS>
      <RNUM>59</RNUM>
      <ROUTENAME>124(대왕암공원 방면)</ROUTENAME>
      <ROUTENO>124</ROUTENO>
      <DPTCSEQNO>9</DPTCSEQNO>
    </row>
    <row>
      <DIRECTION>2</DIRECTION>
      <TIME>0755</TIME>
      <CLASS>0</CLASS>
      <RNUM>60</RNUM>
      <ROUTENAME>124(대왕암공원 방면)</ROUTENAME>
      <ROUTENO>124</ROUTENO>
      <DPTCSEQNO>10</DPTCSEQNO>
    </row>
    <row>
      <DIRECTION>2</DIRECTION>
      <TIME>0810</TIME>
      <CLASS>0</CLASS>
      <RNUM>61</RNUM>
      <ROUTENAME>124(대왕암공원 방면)</ROUTENAME>
      <ROUTENO>124</ROUTENO>
      <DPTCSEQNO>11</DPTCSEQNO>
    </row>
    <row>
      <DIRECTION>2</DIRECTION>
      <TIME>0835</TIME>
      <CLASS>0</CLASS>
      <RNUM>62</RNUM>
      <ROUTENAME>124(대왕암공원 방면)</ROUTENAME>
      <ROUTENO>124</ROUTENO>
      <DPTCSEQNO>12</DPTCSEQNO>
    </row>
    <row>
      <DIRECTION>2</DIRECTION>
      <TIME>0905</TIME>
      <CLASS>0</CLASS>
      <RNUM>63</RNUM>
      <ROUTENAME>124(대왕암공원 방면)</ROUTENAME>
      <ROUTENO>124</ROUTENO>
      <DPTCSEQNO>13</DPTCSEQNO>
    </row>
    <row>
      <DIRECTION>2</DIRECTION>
      <TIME>0920</TIME>
      <CLASS>0</CLASS>
      <RNUM>64</RNUM>
      <ROUTENAME>124(대왕암공원 방면)</ROUTENAME>
      <ROUTENO>124</ROUTENO>
      <DPTCSEQNO>14</DPTCSEQNO>
    </row>
    <row>
      <DIRECTION>2</DIRECTION>
      <TIME>0940</TIME>
      <CLASS>0</CLASS>
      <RNUM>65</RNUM>
      <ROUTENAME>124(대왕암공원 방면)</ROUTENAME>
      <ROUTENO>124</ROUTENO>
      <DPTCSEQNO>15</DPTCSEQNO>
    </row>
    <row>
      <DIRECTION>2</DIRECTION>
      <TIME>1000</TIME>
      <CLASS>0</CLASS>
      <RNUM>66</RNUM>
      <ROUTENAME>124(대왕암공원 방면)</ROUTENAME>
      <ROUTENO>124</ROUTENO>
      <DPTCSEQNO>16</DPTCSEQNO>
    </row>
    <row>
      <DIRECTION>2</DIRECTION>
      <TIME>1020</TIME>
      <CLASS>0</CLASS>
      <RNUM>67</RNUM>
      <ROUTENAME>124(대왕암공원 방면)</ROUTENAME>
      <ROUTENO>124</ROUTENO>
      <DPTCSEQNO>17</DPTCSEQNO>
    </row>
    <row>
      <DIRECTION>2</DIRECTION>
      <TIME>1035</TIME>
      <CLASS>0</CLASS>
      <RNUM>68</RNUM>
      <ROUTENAME>124(대왕암공원 방면)</ROUTENAME>
      <ROUTENO>124</ROUTENO>
      <DPTCSEQNO>18</DPTCSEQNO>
    </row>
    <row>
      <DIRECTION>2</DIRECTION>
      <TIME>1050</TIME>
      <CLASS>0</CLASS>
      <RNUM>69</RNUM>
      <ROUTENAME>124(대왕암공원 방면)</ROUTENAME>
      <ROUTENO>124</ROUTENO>
      <DPTCSEQNO>19</DPTCSEQNO>
    </row>
    <row>
      <DIRECTION>2</DIRECTION>
      <TIME>1115</TIME>
      <CLASS>0</CLASS>
      <RNUM>70</RNUM>
      <ROUTENAME>124(대왕암공원 방면)</ROUTENAME>
      <ROUTENO>124</ROUTENO>
      <DPTCSEQNO>20</DPTCSEQNO>
    </row>
    <row>
      <DIRECTION>2</DIRECTION>
      <TIME>1135</TIME>
      <CLASS>0</CLASS>
      <RNUM>71</RNUM>
      <ROUTENAME>124(대왕암공원 방면)</ROUTENAME>
      <ROUTENO>124</ROUTENO>
      <DPTCSEQNO>21</DPTCSEQNO>
    </row>
    <row>
      <DIRECTION>2</DIRECTION>
      <TIME>1150</TIME>
      <CLASS>0</CLASS>
      <RNUM>72</RNUM>
      <ROUTENAME>124(대왕암공원 방면)</ROUTENAME>
      <ROUTENO>124</ROUTENO>
      <DPTCSEQNO>22</DPTCSEQNO>
    </row>
    <row>
      <DIRECTION>2</DIRECTION>
      <TIME>1205</TIME>
      <CLASS>0</CLASS>
      <RNUM>73</RNUM>
      <ROUTENAME>124(대왕암공원 방면)</ROUTENAME>
      <ROUTENO>124</ROUTENO>
      <DPTCSEQNO>23</DPTCSEQNO>
    </row>
    <row>
      <DIRECTION>2</DIRECTION>
      <TIME>1225</TIME>
      <CLASS>0</CLASS>
      <RNUM>74</RNUM>
      <ROUTENAME>124(대왕암공원 방면)</ROUTENAME>
      <ROUTENO>124</ROUTENO>
      <DPTCSEQNO>24</DPTCSEQNO>
    </row>
    <row>
      <DIRECTION>2</DIRECTION>
      <TIME>1240</TIME>
      <CLASS>0</CLASS>
      <RNUM>75</RNUM>
      <ROUTENAME>124(대왕암공원 방면)</ROUTENAME>
      <ROUTENO>124</ROUTENO>
      <DPTCSEQNO>25</DPTCSEQNO>
    </row>
    <row>
      <DIRECTION>2</DIRECTION>
      <TIME>1255</TIME>
      <CLASS>0</CLASS>
      <RNUM>76</RNUM>
      <ROUTENAME>124(대왕암공원 방면)</ROUTENAME>
      <ROUTENO>124</ROUTENO>
      <DPTCSEQNO>26</DPTCSEQNO>
    </row>
    <row>
      <DIRECTION>2</DIRECTION>
      <TIME>1330</TIME>
      <CLASS>0</CLASS>
      <RNUM>77</RNUM>
      <ROUTENAME>124(대왕암공원 방면)</ROUTENAME>
      <ROUTENO>124</ROUTENO>
      <DPTCSEQNO>27</DPTCSEQNO>
    </row>
    <row>
      <DIRECTION>2</DIRECTION>
      <TIME>1400</TIME>
      <CLASS>0</CLASS>
      <RNUM>78</RNUM>
      <ROUTENAME>124(대왕암공원 방면)</ROUTENAME>
      <ROUTENO>124</ROUTENO>
      <DPTCSEQNO>28</DPTCSEQNO>
    </row>
    <row>
      <DIRECTION>2</DIRECTION>
      <TIME>1430</TIME>
      <CLASS>0</CLASS>
      <RNUM>79</RNUM>
      <ROUTENAME>124(대왕암공원 방면)</ROUTENAME>
      <ROUTENO>124</ROUTENO>
      <DPTCSEQNO>29</DPTCSEQNO>
    </row>
    <row>
      <DIRECTION>2</DIRECTION>
      <TIME>1455</TIME>
      <CLASS>0</CLASS>
      <RNUM>80</RNUM>
      <ROUTENAME>124(대왕암공원 방면)</ROUTENAME>
      <ROUTENO>124</ROUTENO>
      <DPTCSEQNO>30</DPTCSEQNO>
    </row>
    <row>
      <DIRECTION>2</DIRECTION>
      <TIME>1515</TIME>
      <CLASS>0</CLASS>
      <RNUM>81</RNUM>
      <ROUTENAME>124(대왕암공원 방면)</ROUTENAME>
      <ROUTENO>124</ROUTENO>
      <DPTCSEQNO>31</DPTCSEQNO>
    </row>
    <row>
      <DIRECTION>2</DIRECTION>
      <TIME>1540</TIME>
      <CLASS>0</CLASS>
      <RNUM>82</RNUM>
      <ROUTENAME>124(대왕암공원 방면)</ROUTENAME>
      <ROUTENO>124</ROUTENO>
      <DPTCSEQNO>32</DPTCSEQNO>
    </row>
    <row>
      <DIRECTION>2</DIRECTION>
      <TIME>1555</TIME>
      <CLASS>0</CLASS>
      <RNUM>83</RNUM>
      <ROUTENAME>124(대왕암공원 방면)</ROUTENAME>
      <ROUTENO>124</ROUTENO>
      <DPTCSEQNO>33</DPTCSEQNO>
    </row>
    <row>
      <DIRECTION>2</DIRECTION>
      <TIME>1615</TIME>
      <CLASS>0</CLASS>
      <RNUM>84</RNUM>
      <ROUTENAME>124(대왕암공원 방면)</ROUTENAME>
      <ROUTENO>124</ROUTENO>
      <DPTCSEQNO>34</DPTCSEQNO>
    </row>
    <row>
      <DIRECTION>2</DIRECTION>
      <TIME>1650</TIME>
      <CLASS>0</CLASS>
      <RNUM>85</RNUM>
      <ROUTENAME>124(대왕암공원 방면)</ROUTENAME>
      <ROUTENO>124</ROUTENO>
      <DPTCSEQNO>35</DPTCSEQNO>
    </row>
    <row>
      <DIRECTION>2</DIRECTION>
      <TIME>1705</TIME>
      <CLASS>0</CLASS>
      <RNUM>86</RNUM>
      <ROUTENAME>124(대왕암공원 방면)</ROUTENAME>
      <ROUTENO>124</ROUTENO>
      <DPTCSEQNO>36</DPTCSEQNO>
    </row>
    <row>
      <DIRECTION>2</DIRECTION>
      <TIME>1730</TIME>
      <CLASS>0</CLASS>
      <RNUM>87</RNUM>
      <ROUTENAME>124(대왕암공원 방면)</ROUTENAME>
      <ROUTENO>124</ROUTENO>
      <DPTCSEQNO>37</DPTCSEQNO>
    </row>
    <row>
      <DIRECTION>2</DIRECTION>
      <TIME>1750</TIME>
      <CLASS>0</CLASS>
      <RNUM>88</RNUM>
      <ROUTENAME>124(대왕암공원 방면)</ROUTENAME>
      <ROUTENO>124</ROUTENO>
      <DPTCSEQNO>38</DPTCSEQNO>
    </row>
    <row>
      <DIRECTION>2</DIRECTION>
      <TIME>1810</TIME>
      <CLASS>0</CLASS>
      <RNUM>89</RNUM>
      <ROUTENAME>124(대왕암공원 방면)</ROUTENAME>
      <ROUTENO>124</ROUTENO>
      <DPTCSEQNO>39</DPTCSEQNO>
    </row>
    <row>
      <DIRECTION>2</DIRECTION>
      <TIME>1830</TIME>
      <CLASS>0</CLASS>
      <RNUM>90</RNUM>
      <ROUTENAME>124(대왕암공원 방면)</ROUTENAME>
      <ROUTENO>124</ROUTENO>
      <DPTCSEQNO>40</DPTCSEQNO>
    </row>
    <row>
      <DIRECTION>2</DIRECTION>
      <TIME>1850</TIME>
      <CLASS>0</CLASS>
      <RNUM>91</RNUM>
      <ROUTENAME>124(대왕암공원 방면)</ROUTENAME>
      <ROUTENO>124</ROUTENO>
      <DPTCSEQNO>41</DPTCSEQNO>
    </row>
    <row>
      <DIRECTION>2</DIRECTION>
      <TIME>1910</TIME>
      <CLASS>0</CLASS>
      <RNUM>92</RNUM>
      <ROUTENAME>124(대왕암공원 방면)</ROUTENAME>
      <ROUTENO>124</ROUTENO>
      <DPTCSEQNO>42</DPTCSEQNO>
    </row>
    <row>
      <DIRECTION>2</DIRECTION>
      <TIME>1930</TIME>
      <CLASS>0</CLASS>
      <RNUM>93</RNUM>
      <ROUTENAME>124(대왕암공원 방면)</ROUTENAME>
      <ROUTENO>124</ROUTENO>
      <DPTCSEQNO>43</DPTCSEQNO>
    </row>
    <row>
      <DIRECTION>2</DIRECTION>
      <TIME>1955</TIME>
      <CLASS>0</CLASS>
      <RNUM>94</RNUM>
      <ROUTENAME>124(대왕암공원 방면)</ROUTENAME>
      <ROUTENO>124</ROUTENO>
      <DPTCSEQNO>44</DPTCSEQNO>
    </row>
    <row>
      <DIRECTION>2</DIRECTION>
      <TIME>2015</TIME>
      <CLASS>0</CLASS>
      <RNUM>95</RNUM>
      <ROUTENAME>124(대왕암공원 방면)</ROUTENAME>
      <ROUTENO>124</ROUTENO>
      <DPTCSEQNO>45</DPTCSEQNO>
    </row>
    <row>
      <DIRECTION>2</DIRECTION>
      <TIME>2040</TIME>
      <CLASS>0</CLASS>
      <RNUM>96</RNUM>
      <ROUTENAME>124(대왕암공원 방면)</ROUTENAME>
      <ROUTENO>124</ROUTENO>
      <DPTCSEQNO>46</DPTCSEQNO>
    </row>
    <row>
      <DIRECTION>2</DIRECTION>
      <TIME>2100</TIME>
      <CLASS>0</CLASS>
      <RNUM>97</RNUM>
      <ROUTENAME>124(대왕암공원 방면)</ROUTENAME>
      <ROUTENO>124</ROUTENO>
      <DPTCSEQNO>47</DPTCSEQNO>
    </row>
    <row>
      <DIRECTION>2</DIRECTION>
      <TIME>2135</TIME>
      <CLASS>0</CLASS>
      <RNUM>98</RNUM>
      <ROUTENAME>124(대왕암공원 방면)</ROUTENAME>
      <ROUTENO>124</ROUTENO>
      <DPTCSEQNO>48</DPTCSEQNO>
    </row>
    <row>
      <DIRECTION>2</DIRECTION>
      <TIME>2205</TIME>
      <CLASS>0</CLASS>
      <RNUM>99</RNUM>
      <ROUTENAME>124(대왕암공원 방면)</ROUTENAME>
      <ROUTENO>124</ROUTENO>
      <DPTCSEQNO>49</DPTCSEQNO>
    </row>
    <row>
      <DIRECTION>2</DIRECTION>
      <TIME>2240</TIME>
      <CLASS>0</CLASS>
      <RNUM>100</RNUM>
      <ROUTENAME>124(대왕암공원 방면)</ROUTENAME>
      <ROUTENO>124</ROUTENO>
      <DPTCSEQNO>50</DPTCSEQNO>
    </row>
  </list>
</tableInfo>
`;
let parsedData;
let routes = {};

// parse xml to json first.
parser.parseString(xml, function(err, result) {
    // console.log(result.tableInfo.list[0].row);
    parsedData = result.tableInfo.list[0].row;
})

// process json to get each route number's departure time table.
parsedData.forEach(function(val) {
    if (routes[val.ROUTENAME[0]] == undefined) {
        routes[val.ROUTENAME[0]] = [];
    }
    routes[val.ROUTENAME[0]].push(val.TIME[0]);
})

// remove all times except 3 from now
let route_departureTime = [];
Object.keys(routes).forEach(function(route) {
    let tempRoute = {};
    tempRoute[route] = [];

    let cnt = 0;
    routes[route].forEach(function(time, idx) {
        let current_moment = moment(time, "HHmm");
        if (current_moment.isSameOrAfter(moment())) {
            // if route departure time is same or after from now, push it into array.
            if(idx <= routes[route].length && cnt < 3) {
                //prevent out of range
                tempRoute[route].push(time);
                cnt += 1;
            }
        }
    })
    route_departureTime.push(tempRoute);
})

console.log(route_departureTime);