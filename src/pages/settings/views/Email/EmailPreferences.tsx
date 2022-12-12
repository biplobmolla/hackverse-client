import React from 'react'
export interface EmailPreferencesProps {
  title: string;
  message: string;
}
export default function EmailPreferences({title, message}: EmailPreferencesProps ) {
    return (
      <div className="EmailPreferences">
        <form className="mx-5 my-5">
          <div className="">
            <label className="text-sm font-medium my-3 block">
              <input type="radio" name="type" value="marketing" />
              {title}
            </label>
            <p className="text-xs">{message}</p>
          </div>
        </form>
        <style jsx>{`
          .EmailPreferences form label input {
            margin: 5px 5px 0 -20px;
            float: left;
          }
        `}</style>
      </div>
    );
}
