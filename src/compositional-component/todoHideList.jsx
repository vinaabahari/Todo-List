import React from 'react';

function TodoHideList({ isSembunyikanTugasChecked, setisSembunyikanTugasChecked }) {
  return (
    <section id="hide">
        <div className="mb-3 ms-5">
          <input
            type="checkbox"
            className="form-check-input"
            checked={isSembunyikanTugasChecked}
            onChange={() => setisSembunyikanTugasChecked(!isSembunyikanTugasChecked)}
          />
          <label className="ms-2">
            Sembunyikan Tugas Selesai
          </label>
        </div>
        </section>
  );
}

export default TodoHideList;
