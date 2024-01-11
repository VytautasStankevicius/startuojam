import Work from "../work/Work";

const WorksTable = ({ works }) => {
  console.log({ works });
  function duration(x, y) {
    let timeStart = x.split(":");
    let timeEnd = y.split(":");
    return (
      (timeEnd[0] * 60 * 60 +
        timeEnd[1] * 60 -
        (timeStart[0] * 60 * 60 + timeStart[1] * 60)) /
      3600
    );
  }

  return (
    <table className="table table-bordered table-striped">
      <thead>
        <tr>
          <th>Date</th>
          <th>Client</th>
          <th>Suteikta paslauga</th>
          <th>Aprasymas</th>
          {/* <th>Nuo</th> */}
          <th>Darbo trukme</th>
          <th>Keisti</th>
          <th>Salinti</th>
        </tr>
      </thead>
      <tbody>
        {works.map((work) => (
          <Work
            key={work.id}
            id={work.id}
            date={work.date}
            company={work.company}
            service={work.service}
            description={work.description}
            duration={duration(work.timeFrom, work.timeTo).toFixed(2)}
          />
        ))}
      </tbody>
    </table>
  );
};
export default WorksTable;
