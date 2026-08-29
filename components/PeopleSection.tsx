import { FeaturedPartner } from "@/components/FeaturedPartner";
import { TeamDirectory } from "@/components/TeamDirectory";
import { Button, SectionLabel } from "@/components/Button";
import { people } from "@/data/people";

export function PeopleSection({
  eyebrow = "Our people",
  showFeatured = true,
  compact = false,
}: {
  eyebrow?: string;
  showFeatured?: boolean;
  compact?: boolean;
}) {
  const featured = people[0];

  return (
    <div className="people-block">
      {compact ? null : (
        <div className="people-head">
          <div>
            <SectionLabel>{eyebrow}</SectionLabel>
            <h2>
              The people
              <br />
              behind the counsel.
            </h2>
          </div>
          <div className="people-head-meta">
            <p className="lede people-lede">
              Experienced legal professionals bringing together deep legal knowledge,
              commercial understanding and a commitment to exceptional client service.
            </p>
            <div className="people-stats">
              <span>
                <strong>{String(people.length).padStart(2, "0")}</strong>
                Partners
              </span>
              <span>
                <strong>IN</strong>
                Across India
              </span>
            </div>
            <Button href="/people">Meet the partnership →</Button>
          </div>
        </div>
      )}
      {showFeatured ? <FeaturedPartner person={featured} /> : null}
      {showFeatured ? (
        <p className="label people-rest-label">The partnership</p>
      ) : null}
      <TeamDirectory
        exclude={showFeatured ? featured.slug : undefined}
        showFilters={compact}
      />
    </div>
  );
}
