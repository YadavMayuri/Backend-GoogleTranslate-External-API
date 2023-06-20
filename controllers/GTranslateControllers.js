import axios from "axios";

export const DetectLanguageOfText = async (req, res) => {

    const encodedParams = new URLSearchParams();
    encodedParams.set('q', 'English is hard, but detectably so');

    const options = {
        method: 'POST',
        url: 'https://google-translate1.p.rapidapi.com/language/translate/v2/detect',
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'Accept-Encoding': 'application/gzip',
            'X-RapidAPI-Key': 'b976958422msh8bf1543debe83e3p1e9b62jsn6791d83ab475',
            'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
        },
        data: encodedParams,
    };

    try {
        const response = await axios.request(options);
        console.log(response.data);
        return res.send(response.data);
    } catch (error) {
        return res.send(error);
    }
}



//get list of supported languages

export const getListOfSupportedLanguages = async (req, res) => {

    const options = {
        method: 'GET',
        url: 'https://google-translate1.p.rapidapi.com/language/translate/v2/languages',
        headers: {
            'Accept-Encoding': 'application/gzip',
            'X-RapidAPI-Key': 'b976958422msh8bf1543debe83e3p1e9b62jsn6791d83ab475',
            'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
        }
    };

    try {
        const response = await axios.request(options);
        console.log(response.data);
        return res.send(response.data);
    } catch (error) {
        return res.send(error);
    }
}



//Translates input text, returning translated text

export const TranslatedText = async (req,res)=>{

const encodedParams = new URLSearchParams();
encodedParams.set('q', 'Hello, world!');
encodedParams.set('target', 'hi');
encodedParams.set('source', 'en');

const options = {
  method: 'POST',
  url: 'https://google-translate1.p.rapidapi.com/language/translate/v2',
  headers: {
    'content-type': 'application/x-www-form-urlencoded',
    'Accept-Encoding': 'application/gzip',
    'X-RapidAPI-Key': 'b976958422msh8bf1543debe83e3p1e9b62jsn6791d83ab475',
    'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
  },
  data: encodedParams,
};

try {
	const response = await axios.request(options);
	console.log(response.data);
    return res.send(response.data)
} catch (error) {
	return res.send(error);
}
}