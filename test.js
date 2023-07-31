import { OnThisDay } from 'https://cdn.jsdelivr.net/gh/MarketingPipeline/OnThisDay.js@latest/dist/onthisday.min.js';

// Fetch events, births, and deaths for a specific date
try {
    let onDate = await OnThisDay('July 4')
    console.log('All Data:', onDate.getAll());
    console.log('Births:', onDate.getBirths());
    console.log('Deaths:', onDate.getDeaths());
    console.log('Events:', onDate.getEvents());
} catch (error) {
    console.log(error.message)
}

// Fetch events, births, and deaths that happened on the current date.
try {
    let onToday = await OnThisDay()
    console.log('All Data:', onToday.getAll());
    console.log('Births:', onToday.getBirths());
    console.log('Deaths:', onToday.getDeaths());
    console.log('Events:', onToday.getEvents());
} catch (error) {
    console.log(error.message)
}
