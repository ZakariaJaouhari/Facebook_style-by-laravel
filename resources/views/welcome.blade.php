<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Facebook</title>
    <link rel="icon" href="Facebook_Logo.png">
    <link rel="stylesheet" href="face.css">
</head>

<body>
    <div id="overlay" onclick="hidexplications()"></div>
    <div id="div1">
        <div id="div3">
            <h1>facebook</h1>
            <p id="p1">Facebook helps you connect and share with the people in your life.</p>
        </div>
        <div id="divp">
            <div id="div2">
                <input id="email" class="int" type="text" placeholder="Email address or phone number"><br>
                <input id="pass" class="int" type="password" placeholder="Password"><br>
                <a href=""><input style="font-weight: bold;" id="itnb" type="submit" value="Log in"><br></a>
                <a href="https://en-gb.facebook.com/login/identify/?ctx=recover&ars=facebook_login&from_login_screen=0">
                    <p id="p2">Forgotten password?</p>
                </a>
                <hr id="hr1">
                <input style="font-weight: bold;" id="inptB" type="button" value="Create new account"
                    onclick="showSignupForm()">
            </div>
            <p id="p"><a id="ap" href="https://en-gb.facebook.com/pages/create/?ref_type=registration_form"
                    style="color: black; font-weight: bold; ">Create a Page </a><span id="sp"> for a celebrity,
                    brand or
                    business.</span></p>
        </div>
    </div>
    <div id="signup" style="display: none;">
        <h2 style="font-size: 32px;font-family: SFProDisplay-Bold, Helvetica, Arial, sans-serif;display: block;
                   margin-left: 10px;margin-bottom: 3%;position: relative;top: 10px;">
            Sign Up
        </h2>
        <p id="p-sign">It's quick and easy.</p>
        <img id="x" src="https://static.xx.fbcdn.net/rsrc.php/v3/y2/r/11W0xEwKS62.png" alt=""
            onclick="hideSignupForm()">
        <hr style="position: relative;top: 5px;">
        <form id="signup-form" action="{{ url('create') }}" method="POST">
            @csrf
            <input id="nameP" name="nameP" class="inputs1" type="text" placeholder="First name" required style="margin-right: 8px;margin-left: 10px;">
            <input id="surname" name="surname" class="inputs1" type="text" placeholder="Surname"><br>
            <input id="mobile" name="mobile" class="inputs2" type="text" placeholder="Mobile number or email address"><br>
            <input id="password" name="password" class="inputs2" type="password" placeholder="New password"><br>
            <label for="" id="datebirth">Date of birth</label><img onclick="showexplication1()"
                src="file:///Users/zakaria/Downloads/iE9yyunejFh.png" alt="" style="height: 12px;width: 12px;"><br>
            <div id="expli1">
                <p style="margin-left: 10px;margin-top: 25px;"><b>Providing your birthday</b> helps make sure that you get<br> the
                    right Facebook experience for your age.
                    If you<br> want to change who sees this, go to the About
                    section<br> of your profile. For more details, please visit our<br>
                    <a href="https://free.facebook.com/privacy/policy/#" id="Pp">Privacy Policy.</a>
                </p>
            </div>
            <div style="display: flex;margin-bottom: -10px;">
                <select class="slct">
                    <option value="">1</option>
                    <option value="">2</option>
                    <option value="">3</option>
                    <option value="">4</option>
                    <option value="">5</option>
                    <option value="">6</option>
                    <option value="">7</option>
                    <option value="">8</option>
                    <option value="">9</option>
                    <option value="">10</option>
                    <option value="">11</option>
                    <option value="">12</option>
                    <option value="">13</option>
                    <option value="">14</option>
                    <option value="">15</option>
                    <option value="">16</option>
                    <option value="">17</option>
                    <option value="">18</option>
                    <option value="">19</option>
                    <option value="">20</option>
                    <option value="">21</option>
                    <option value="">22</option>
                    <option value="">23</option>
                    <option value="">24</option>
                    <option value="">25</option>
                    <option value="">26</option>
                    <option value="">27</option>
                    <option value="">28</option>
                    <option value="">29</option>
                    <option value="">30</option>
                    <option value="">31</option>
                </select>
                <select class="slct">
                    <option value="">Jan</option>
                    <option value="">Feb</option>
                    <option value="">Mar</option>
                    <option value="">Apr</option>
                    <option value="">May</option>
                    <option value="">Jun</option>
                    <option value="">Jul</option>
                    <option value="">Aug</option>
                    <option value="">Sep</option>
                    <option value="">Oct</option>
                    <option value="">Nov</option>
                    <option value="">Dec</option>
                </select>
                <select class="slct">
                    <option value="2023">2023</option>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2012">2012</option>
                    <option value="2011">2011</option>
                    <option value="2010">2010</option>
                    <option value="2009">2009</option>
                    <option value="2008">2008</option>
                    <option value="2007">2007</option>
                    <option value="2006">2006</option>
                    <option value="2005">2005</option>
                    <option value="2004">2004</option>
                    <option value="2003">2003</option>
                    <option value="2002">2002</option>
                    <option value="2001">2001</option>
                    <option value="2000">2000</option>
                    <option value="1999">1999</option>
                    <option value="1998">1998</option>
                    <option value="1997">1997</option>
                    <option value="1996">1996</option>
                    <option value="1995">1995</option>
                    <option value="1994">1994</option>
                    <option value="1993">1993</option>
                    <option value="1992">1992</option>
                    <option value="1991">1991</option>
                    <option value="1990">1990</option>
                    <option value="1989">1989</option>
                    <option value="1988">1988</option>
                    <option value="1987">1987</option>
                    <option value="1986">1986</option>
                    <option value="1985">1985</option>
                    <option value="1984">1984</option>
                    <option value="1983">1983</option>
                    <option value="1982">1982</option>
                    <option value="1981">1981</option>
                    <option value="1980">1980</option>
                    <option value="1979">1979</option>
                    <option value="1978">1978</option>
                    <option value="1977">1977</option>
                    <option value="1976">1976</option>
                    <option value="1975">1975</option>
                    <option value="1974">1974</option>
                    <option value="1973">1973</option>
                    <option value="1972">1972</option>
                    <option value="1971">1971</option>
                    <option value="1970">1970</option>
                    <option value="1969">1969</option>
                    <option value="1968">1968</option>
                    <option value="1967">1967</option>
                    <option value="1966">1966</option>
                    <option value="1965">1965</option>
                    <option value="1964">1964</option>
                    <option value="1963">1963</option>
                    <option value="1962">1962</option>
                    <option value="1961">1961</option>
                    <option value="1960">1960</option>
                    <option value="1959">1959</option>
                    <option value="1958">1958</option>
                    <option value="1957">1957</option>
                    <option value="1956">1956</option>
                    <option value="1955">1955</option>
                    <option value="1954">1954</option>
                    <option value="1953">1953</option>
                    <option value="1952">1952</option>
                    <option value="1951">1951</option>
                    <option value="1950">1950</option>
                    <option value="1949">1949</option>
                    <option value="1948">1948</option>
                    <option value="1947">1947</option>
                    <option value="1946">1946</option>
                    <option value="1945">1945</option>
                    <option value="1944">1944</option>
                    <option value="1943">1943</option>
                    <option value="1942">1942</option>
                    <option value="1941">1941</option>
                    <option value="1940">1940</option>
                    <option value="1939">1939</option>
                    <option value="1938">1938</option>
                    <option value="1937">1937</option>
                    <option value="1936">1936</option>
                    <option value="1935">1935</option>
                    <option value="1934">1934</option>
                    <option value="1933">1933</option>
                    <option value="1932">1932</option>
                    <option value="1931">1931</option>
                    <option value="1930">1930</option>
                    <option value="1929">1929</option>
                    <option value="1928">1928</option>
                    <option value="1927">1927</option>
                    <option value="1926">1926</option>
                    <option value="1925">1925</option>
                    <option value="1924">1924</option>
                    <option value="1923">1923</option>
                    <option value="1922">1922</option>
                    <option value="1921">1921</option>
                    <option value="1920">1920</option>
                    <option value="1919">1919</option>
                    <option value="1918">1918</option>
                    <option value="1917">1917</option>
                    <option value="1916">1916</option>
                    <option value="1915">1915</option>
                    <option value="1914">1914</option>
                    <option value="1913">1913</option>
                    <option value="1912">1912</option>
                    <option value="1911">1911</option>
                    <option value="1910">1910</option>
                    <option value="1909">1909</option>
                    <option value="1908">1908</option>
                    <option value="1907">1907</option>
                    <option value="1906">1906</option>
                    <option value="1905">1905</option>
                </select>
            </div><br>
            <label for="" id="gender" style="font-size: 12px;color: rgb(96, 103, 112);
            font-family: SFProText-Medium, Helvetica, Arial, sans-serif;margin-left: 10px;">Gender</label><img
                onclick="showexplication2()" src="file:///Users/zakaria/Downloads/iE9yyunejFh.png" alt=""
                style="height: 12px;width: 12px;position: relative;left: 5px;"><br>
            <div id="expli2">
                <p style="margin-left: 10px;margin-top: 25px;">You can change who sees your gender on your profile<br> later. Select
                    Custom to choose another gender, or if<br> you'd rather not say.</p>
            </div>
            <div style="display: flex;">
                <div class="spn">
                    <label for="male" id="M" class="lbl" style="margin-left: 10px;">Male</label>
                    <input type="radio" id="male" name="gender" value="male" required>
                </div>
                <div class="spn">
                    <label for="female" id="F" class="lbl" style="margin-left: 10px;">Female</label>
                    <input type="radio" id="female" name="gender" value="female" required>
                </div>
            </div>

            <p class="paras" id="people" style="margin-block-end: 11px;">People who use our service may have uploaded your
                contact
                information to<br> Facebook.<a href="https://www.facebook.com/help/637205020878504"
                    style="color: rgb(56, 88, 152);" class="paras" id="more">Learn
                    more.</a></p>
            <p class="paras" id="by">By clicking Sign Up, you agree to our<a href="https://www.facebook.com/legal/terms/update"
                    style="color: rgb(56, 88, 152);" class="paras" id="terms" >Terms,</a><a
                    href="https://www.facebook.com/privacy/policy/?entry_point=data_policy_redirect&entry=0"
                    style="color: rgb(56, 88, 152);" class="paras" id="PP">Privacy Policy</a>
                and<a
                    href="https://www.facebook.com/privacy/policies/cookies/?entry_point=cookie_policy_redirect&entry=0"
                    style="color: rgb(56, 88, 152);" class="paras" id="cookies" >Cookies<br> Policy.</a>
                You may receive SMS notifications from us and can opt out at any<br> time.
            </p>
            <div style="text-align: center;">
                <button type="button" onclick="submitForm()" id="sign">Sign Up</button>
            </div>
        </form>
    </div>
    <div id="divlng">
        <p id="lng">
            <a onclick="changerLangue('anglais')">English (UK)</a>
            <a onclick="changerLangue('francais')">Français (France)</a>
            <a onclick="changerLangue('arabic')">العربية </a>
            <a onclick="changerLangue('amazigh')">ⵜⴰⵎⴰⵣⵉⵖⵜ</a>
            <a onclick="changerLangue('Espanol')">Español (España)</a>
            <a onclick="changerLangue('Italiano')">Italiano</a>
            <a onclick="changerLangue('Deutsch')"> Deutsch</a>
            <a onclick="changerLangue('Portugues')">Português (Brasil)</a>
            <a onclick="changerLangue('हिन्दी')">हिन्दी</a>
            <a onclick="changerLangue('中文')">中文(简体)</a>
            <a onclick="changerLangue('日本語')">日本語</a>
        </p><br>
        <hr id="hr2"><br>
        <p id="autre">
            <a id="a1" href="https://en-gb.facebook.com/reg/">SignUp</a>
            <a id="a2"
                href="file:///Users/zakaria/Desktop/Zakaria%20Jaouhari%20%20%20%20DEV102/facebook%20style/face.html">Login</a>
            <a href="https://www.messenger.com/">Messenger</a>
            <a href="https://en-gb.facebook.com/lite/">Facebook Lite</a>
            <a id="a3" href="https://en-gb.facebook.com/watch/">Video</a>
            <a id="a4" href="https://en-gb.facebook.com/places/">Places</a>
            <a id="a5" href="https://en-gb.facebook.com/gaming/play/">Games</a>
            <a
                href="file:///Users/zakaria/Desktop/Zakaria%20Jaouhari%20%20%20%20DEV102/facebook%20style/face.html">Marketplace</a>
            <a href="https://pay.facebook.com/">Meta Pay</a>
            <a href="https://www.meta.com/">Meta Store</a>
            <a href="https://www.meta.com/quest/">Meta Quest</a>
            <a href="https://www.instagram.com/">Instagram</a>
            <a href="https://www.threads.net/login">Threads</a>
            <a id="a6" href="https://en-gb.facebook.com/fundraisers/">Fundraisers</a>
            <a id="a7" href="https://en-gb.facebook.com/biz/directory/">Services</a>
            <a id="a8" href="https://en-gb.facebook.com/votinginformationcenter/">Voting information centre</a>
            <a id="a9" href="https://en-gb.facebook.com/privacy/policy/?entry_point=facebook_page_footer">Privacy
                policy</a>
            <a id="a10" href="https://en-gb.facebook.com/privacy/center/?entry_point=facebook_page_footer">Privacy
                centre</a>
            <a id="a11" href="https://en-gb.facebook.com/groups/discover/">Groups</a>
            <a id="a12" href="https://about.meta.com/">About</a>
            <a id="a13"
                href="https://en-gb.facebook.com/login.php?next=https%3A%2F%2Fen-gb.facebook.com%2Fads%2Fcreate%2F%3Fnav_source%3Dunknown%26campaign_id%3D402047449186%26placement%3Dpflo%26extra_1%3Dnot-admgr-user&campaign_id=402047449186">
                Create ad
            </a>
            <a id="a14" href="https://en-gb.facebook.com/pages/create/?ref_type=site_footer">Create page</a>
            <a id="a15" href="https://developers.facebook.com/?ref=pf">Developers</a>
            <a id="a16" href="https://www.metacareers.com/">Careers</a>
            <a id="a17"
                href="https://en-gb.facebook.com/privacy/policies/cookies/?entry_point=cookie_policy_redirect&entry=0">Cookies</a>
            <a id="a18" href="https://www.facebook.com/help/568137493302217">AdChoices</a>
            <a id="a19" href="https://en-gb.facebook.com/policies_center/">Terms</a>
            <a id="a20" href="https://en-gb.facebook.com/help/?ref=pf">Help</a>
            <a id="a21" href="https://en-gb.facebook.com/help/637205020878504">Contact Uploading and
                non-users</a><br><br><br>
            <a href="" style="text-decoration: none;">Meta © 2023</a>

        </p><br><br>

        <script src="face.js"></script>
</body>

</html>